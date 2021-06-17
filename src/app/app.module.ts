import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { TaskListsComponent } from './task/task-lists/task-lists.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskDialogComponent } from './task/task-dialog/task-dialog.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { FdatePipe } from './fdate.pipe';

import { NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFirestoreAdapter } from './shared/ngb-date-firestore-adapter.service';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { NoPageFoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListsComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskDialogComponent,
    FdatePipe,
    ProjectsComponent,
    SettingsComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatListModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [MatDatepickerModule, { provide: NgbDateAdapter, useClass: NgbDateFirestoreAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
