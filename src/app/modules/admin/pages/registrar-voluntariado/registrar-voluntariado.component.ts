import { Component, OnInit } from '@angular/core';
import {MascotaService} from "../../../../core/services/mascota.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MascotaModel} from "../../../../core/models/mascota.model";
import {VoluntariadoModel} from "../../../../core/models/voluntariado.model";
import {VolunteerService} from "../../../../core/services/volunteer.service";
import {AuthService} from "../../../../core/services/auth.service";
import {User} from "../../../../core/models/user.model";

@Component({
  selector: 'app-registrar-voluntariado',
  templateUrl: './registrar-voluntariado.component.html',
  styleUrls: ['./registrar-voluntariado.component.css']
})
export class RegistrarVoluntariadoComponent implements OnInit {

  currentUser!: User | null;
  constructor(
    private voluntarioService: VolunteerService,
    private snackBar: MatSnackBar,
    private router: Router,
    authService: AuthService
  ) {
    authService.user$.subscribe(
      user => {
        this.currentUser = user;
        console.log(user)
      }
    );
  }

  ngOnInit(): void {
  }

  onNewVoluntario(volutnario: VoluntariadoModel) {
    if (this.currentUser?.idAdmin) {
      volutnario.admin = {
        id: this.currentUser.idAdmin
      }
    }
    volutnario.fechaRegistro = volutnario.fechaRegistro.toLocaleString('en-GB').split(',')[0];
    console.log(volutnario.fechaRegistro)
    this.voluntarioService.createOne(volutnario).subscribe(
      r => {
        let snackbar = this.snackBar.open('Registro Exitoso', 'Undo', {
          duration: 2000
        });
        this.router.navigate(['/admin/voluntariados']);
      }
    )
  }

}
