import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../Interface/IUser";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ApiService} from "./apiservice.service";




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);
  }

  login(username: string, password: string) {

    return this.apiService.getUser(username, password)/*.pipe(
      tap((response: any) => {
        localStorage.setItem("Auth", response.auth_token);*/
        this._isLoggedIn$.next(true);
        //localStorage.setItem('profanis_auth', response.token);
      //})
   // );
  }
}






