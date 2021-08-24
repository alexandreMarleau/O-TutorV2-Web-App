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
import { EtudiantTBComponent } from './components/etudiant-tb/etudiant-tb.component';
import { AutoEvaluationComponent } from './components/auto-evaluation/auto-evaluation.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'profil', component: UserProfilComponent},
  {path: 'collegelist', component: CollegeListComponent},
  {path: 'etudiant', component: EtudiantTBComponent},
  {path: 'autoevaluation', component: AutoEvaluationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
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
    EtudiantTBComponent,
    AutoEvaluationComponent,
    MainHeaderComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
