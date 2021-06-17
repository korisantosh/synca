import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { NoPageFoundComponent } from './nopagefound/nopagefound.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskListsComponent } from './task/task-lists/task-lists.component';

const routes: Routes = [

  {
    path: 'task',
    component: TaskListsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
