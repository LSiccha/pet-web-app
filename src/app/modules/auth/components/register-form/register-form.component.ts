import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginCreds} from "../../../../core/models/login-creds.model";
import {RegisterCreds} from "../../../../core/models/register-creds.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  validateForm: FormGroup
  message: string = ''

  @Output() onSubmit: EventEmitter<RegisterCreds> = new EventEmitter<RegisterCreds>();

  constructor(
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  submitForm() {
    this.validateForm.controls['rePassword'].setValue(this.validateForm.value.password);
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
