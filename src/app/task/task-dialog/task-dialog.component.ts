import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from '../task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  private backupTask: Partial<Task> = { ...this.data.task};

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TaskDialogData  ) {
  }

  minDate = this.data.task.due?.toDate();
  taskDate = this.data.task.due?.toDate();
  done: Task[] = [];
  myFilter: Date | null = null;

  ngOnInit(): void {}

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.dialogRef.close(this.data);
  }
}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
