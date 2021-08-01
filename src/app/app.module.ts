import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { QuestionComponent } from './components/question/question.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { CollegeListComponent } from './components/college-list/college-list.component';


const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'profil', component: UserProfilComponent},
  {path: 'collegelist', component: CollegeListComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseListComponent,
    AboutPageComponent,
    QuestionComponent,
    UserProfilComponent,
    CollegeListComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
