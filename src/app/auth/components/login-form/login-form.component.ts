import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {fromEvent, merge} from "rxjs";
import {User} from "../../../core/models/user.model";
import {LoginCreds} from "../../../core/models/login-creds.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterViewInit {

  validateForm: FormGroup
  message: string = ''

  /*@ViewChild('username') usernameInput! : ElementRef<HTMLElement>;
  @ViewChild('password') passwordInput! : ElementRef<HTMLElement>;*/

  @Output() onSubmit: EventEmitter<LoginCreds> = new EventEmitter<LoginCreds>();

  constructor(
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [null]
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    /*merge(
      fromEvent<InputEvent>(this.usernameInput.nativeElement, 'input'),
      fromEvent<InputEvent>(this.passwordInput.nativeElement, 'input'),
    ).subscribe(
      () => {
        this.message = ''
      }
    )*/
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.onSubmit.emit(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

}
