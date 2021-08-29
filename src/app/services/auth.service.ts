import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../Interface/IUser";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


 constructor(private http: HttpClient) { }

login (username:string, password: string){

}
}
