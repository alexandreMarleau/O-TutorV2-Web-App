import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.httpClient.get<any>('http://drjev.mocklab.io/user').subscribe(
      response => {
        console.log(response);

      }
    );
  }

}
