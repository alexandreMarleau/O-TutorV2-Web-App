import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-o-tutor';

  isAuth: boolean = false;

  constructor(public authService: AuthService) {}

  _toggleOpened(): void {

  }

}
