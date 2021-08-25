import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  isAuth: boolean = true;
  username = "Laura Fournier"


  constructor(private router: Router) { }

  
  ngOnInit(): void {
  }

  onClickAutoEvaluateBtn(){
    this.router.navigateByUrl("/autoevaluation")
  }

  onProfileCLick(){
    this.router.navigateByUrl("/profil")
  }

}
