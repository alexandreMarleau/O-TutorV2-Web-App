import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
              private router: Router) { }

 
    signIn(userName: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(userName, password)
        .then((result) => {
          this.router.navigate(['student-dashboard']);
       }).catch((error) => {
         window.alert(error.message)
       })
    }
  
}
