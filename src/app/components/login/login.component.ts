import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {MainHeaderComponent} from "../main-header/main-header.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private http: HttpClient, private router: Router) {
  }

  username: string = "";
  password: string = "";


  submitForm() {
      this.getUser(this.username, this.password)
      this.router.navigateByUrl("/etudiant")
  }

  getUser(username: string, password: string){
    this.http.post<any>('http://8g9dz.mocklab.io/auth/token', { username, password }).subscribe(
      response => {
        console.log(response)
        localStorage.setItem("Auth", response.auth_token);        
        window.location.reload();
        
      }
    );
  }

}
