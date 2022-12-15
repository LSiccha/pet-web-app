import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MascotaModel} from "../../../../core/models/mascota.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Profile} from "../../../../core/models/profile.model";
import {VoluntariadoModel} from "../../../../core/models/voluntariado.model";

@Component({
  selector: 'app-voluntariado-form',
  templateUrl: './voluntariado-form.component.html',
  styleUrls: ['./voluntariado-form.component.css']
})
export class VoluntariadoFormComponent implements OnInit {

  private voluntariado!: VoluntariadoModel;
  @Output() onSubmit: EventEmitter<VoluntariadoModel> = new EventEmitter<VoluntariadoModel>()
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.formGroup = this.fb.group(
      {
        'nombres': [
          null, [Validators.required]
        ],
        'edad': [
          null, [Validators.required]
        ],
        'dni': [
          null, [Validators.required]
        ],
        'celular': [
          null, [Validators.required]
        ],
        'correo': [
          null, [Validators.required]
        ],
        'direccion': [
          null, [Validators.required]
        ],
        'fechaRegistro': [
          new Date(), [Validators.required]
        ]
      }
    );
  }

  onSubmitForm(value: VoluntariadoModel) {
    let profile = this.formGroup.value;
    this.onSubmit.emit(profile);
  }

}
