import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../Interface/IUser";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsLoggedIn: boolean = false;


  currentUser: IUser = {
    username: "",
    password: "",
    token: "",
  };

 constructor(private http: HttpClient) { }

login(model: any): Observable<IUser>{
    return this.http.post('https://o-tutor.com/webservices/auth/token',model).pipe(
      map((response: any) => {
        this.IsLoggedIn = true;
        this.currentUser.username = response.username;
        this.currentUser.password = response.password;
        this.currentUser.token = response.token;

        return this.currentUser;
      })

    );

}
logout(){
    this.IsLoggedIn = false;
}
}
