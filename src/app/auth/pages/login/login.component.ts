import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {LoginCreds} from "../../../core/models/login-creds.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(creds: LoginCreds) {
    this.authService.login(creds).subscribe(res => {
      this.authService.saveUser(res);
    })
  }

}
