import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  isAuth: boolean = true;
  username = "Laura Fournier"

  constructor() { }

  
  ngOnInit(): void {
  }

  _toggleOpened(): void {
   
  }

}
