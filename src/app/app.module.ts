import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { LessonComponent } from './lesson/lesson.component';

import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

import { NgxGistRunkitModule } from 'ngx-gist-runkit'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    IndexComponent,
    LoginComponent,
    LearnComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxGistRunkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
