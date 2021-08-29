import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
  });

 // constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  }
/*
  submitForm(){
    if (this.form.invalid){
      return;
    }
    this.apiService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((response ) => {
        console.log(response);
        this.router.navigate(['/about']);
      });
  }*/

}
