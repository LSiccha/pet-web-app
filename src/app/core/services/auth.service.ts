import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginCreds} from "../models/login-creds.model";
import {User} from "../models/user.model";
import {RegisterCreds} from "../models/register-creds.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockedUser : User = {
    username: 'LSiccha',
    id: '12345',
    token: ':)'
  }

  constructor(
    private http: HttpClient,
    private router: 
  ) { }

  private userDataSource: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$ = this.userDataSource.asObservable();

  public login(loginCreds: LoginCreds) : Observable<User> {
    return new Observable<User>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.mockedUser);
        subscriber.complete();
      }, 1000);
    })
  };

  public register(registerCreds: RegisterCreds) : Observable<User> {
    return new Observable<User>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.mockedUser);
        subscriber.complete();
      }, 1000);
    })
  };

  public logout() {
    localStorage.removeItem('user');
    this.userDataSource.next(null);
    this.router.navigate(['']);
  }

}
