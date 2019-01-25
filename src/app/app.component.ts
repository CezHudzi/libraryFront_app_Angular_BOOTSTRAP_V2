import {Component, Output, OnInit} from '@angular/core';
import {LoginGet} from './login-form/loginGet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'libraryFront';

  name: string;
  login: string;
  password: string;
  menu: number;
  logged: boolean;
  logedUser: LoginGet;
  buttonName: string;


  ngOnInit(): void {

    this.name = 'Z INICJACJI';
    this.login = 'Login';
    this.password = null;
    this.logged = false;
    this.buttonName = 'Login';
  }

  receiveLogin($event) {


    this.login = $event;
    this.logged = true;
    this.buttonName = $event;

  }


  reciveLOGOUT($event) {
    this.password = null;
    this.logged = false;
    this.login = null;
    this.buttonName = 'Login';
  }


  reciveUser($event) {


    this.logedUser = $event;
    this.logged = true;


  }


  receivePass($event) {
    console.log($event);
    this.password = $event;
  }

  setMenu(num: number) {
    this.menu = num;

  }


}
