import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';
import {LoginFormService} from '../form-service.service';
import {LoginSend} from './loginSend';
import {LoginGet} from './loginGet';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',

  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() public logged: boolean;
  @Output() public outPutToParentLogin = new EventEmitter<string>();
  @Output() public outPutToParentPassword = new EventEmitter<string>();


  public login: string;
  public passwordUser: string;
  public loginGet = new LoginGet();

  constructor(private router: Router, private _loginFormServixe: LoginFormService) {
  }

  ngOnInit() {

  }


  onFormSubmit2(borrowForm) {
    // console.log(movieForm);
    console.log(borrowForm.value.title);
    console.log(borrowForm.value.titleBook);

    const promise = new Promise((resolve, reject) => {
      return this._loginFormServixe.checkValid(new LoginSend(this.login, this.passwordUser)).toPromise().then(respone => {
        this.loginGet = respone, this.resolveValidationRequest(borrowForm);
      });
    });

    return promise;

  }


  resolveValidationRequest(borrowForm) {

    if (this.loginGet.validation === true) {
      console.log(this.loginGet.validation + ' DONE GOOD ');
      this.login = borrowForm.value.title;
      this.passwordUser = borrowForm.value.titleBook;
      this.outPutToParentLogin.emit(this.login);
      this.outPutToParentPassword.emit(this.passwordUser);
      this.logged = true;
      borrowForm.resetForm();
    } else {

      borrowForm.resetForm();
      window.alert('Wrong password or login');

    }


  }


  logout() {
    this.login = 'Login';
    this.outPutToParentLogin.emit(this.login);
    this.passwordUser = null;
    this.logged = false;

  }


}
