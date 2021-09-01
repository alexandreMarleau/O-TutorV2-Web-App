import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {MainHeaderComponent} from "../main-header/main-header.component";

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

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        this.router.navigate(['/etudiant']);
      });
  }
}
