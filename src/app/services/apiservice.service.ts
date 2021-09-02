import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
/*
  login(username: string, password: string) {
    return this.http.post('http://8g9dz.mocklab.io/auth/token', { username, password });
  }*/

  getUser(username: string, password: string){
    this.http.post<any>('http://drjev.mocklab.io/user', { username, password }).subscribe(
      response => {
        console.log(response)
        localStorage.setItem("Auth", response.auth_token);

      }
    );
  }

}
