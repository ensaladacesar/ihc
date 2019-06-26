import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { IndexComponent } from '../app/index/index.component';
import { LoginComponent } from '../app/login/login.component';
import { LearnComponent } from '../app/learn/learn.component';
import { LessonComponent } from '../app/lesson/lesson.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'learn', component: LearnComponent },
  { path: 'learn/lesson', component: LessonComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
