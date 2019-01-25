import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {LoginSend} from './login-form/loginSend';
import {Observable} from 'rxjs';

import {LoginGet} from './login-form/loginGet';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private _httpService: Http, private httpClient: HttpClient) {
  }


  checkValid(loginSend: LoginSend):  Observable<LoginGet> {
    const headers = new Headers({'Content-Type': 'application/json'});

    console.log(JSON.stringify(loginSend));
    const body = JSON.stringify(loginSend);
    const options = new RequestOptions({headers: headers});


    return this._httpService.post('http://localhost:8080/valid', body, options).map((response: Response) => response.json())
      .catch(this.handleError);


  }


  private handleError(error: Response) {
    return Observable.throw(error);
  }


}
