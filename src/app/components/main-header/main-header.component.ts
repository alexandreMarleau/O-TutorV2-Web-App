import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";





@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})


export class MainHeaderComponent implements OnInit {


isAuth: boolean = false;

  constructor (private router: Router) {}

  username = "Laura Fournier"


  ngOnInit(): void {
  if (localStorage.getItem("Auth") != null)
  {
    this.isAuth = true;
  }


  }

  onClickAutoEvaluateBtn(){
    this.router.navigateByUrl("/autoevaluation")
  }

  onProfileCLick(){
    this.router.navigateByUrl("/profil")
  }

}
