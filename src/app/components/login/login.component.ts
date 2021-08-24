import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth: boolean = true;

  constructor(
    //private authService: AuthService
  ) {


  }

  ngOnInit(): void {
  }
  /*
onSubmit(f:NgForm){

  const loginObserver = {
    next: () => {
    console.log("Success")
    },
    error: () => {

      console.log("error");

    },
  };

  this.authService.login(f.value).subscribe(loginObserver);

}*/
}
