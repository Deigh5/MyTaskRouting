import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTaskComponent } from './my-task/my-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {path: 'my-task', component:MyTaskComponent},
  {path: 'new-task', component:NewTaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
