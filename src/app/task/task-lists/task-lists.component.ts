import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Task } from "./../task";

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
    console.log('list init');
    var dueDate = this.task?.due;
    var seconds = dueDate?.seconds || 0;
    var dateStr = new Date(seconds * 1000);
    console.log(this.task?.due);
    console.log(seconds);

  }

};

