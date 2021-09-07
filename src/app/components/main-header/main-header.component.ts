import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';





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
    this.router.navigateByUrl("/etudiant")
  }


  }

  onClickAutoEvaluateBtn(){
    this.router.navigateByUrl("/autoevaluation")
  }

  onProfileCLick(){
    this.router.navigateByUrl("/profil")
  }

  logout() { 
    localStorage.removeItem("Auth");
    
    this.isAuth = false

    this.router.navigateByUrl("/login");
  }

}
