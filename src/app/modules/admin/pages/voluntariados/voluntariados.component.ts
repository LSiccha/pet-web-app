import { Component, OnInit } from '@angular/core';
import {VolunteerService} from "../../../../core/services/volunteer.service";
import {MascotaModel} from "../../../../core/models/mascota.model";
import {VoluntariadoModel} from "../../../../core/models/voluntariado.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-voluntariados',
  templateUrl: './voluntariados.component.html',
  styleUrls: ['./voluntariados.component.css']
})
export class VoluntariadosComponent implements OnInit {
  dataSource: VoluntariadoModel[] = [];
  displayedColumns: string[] =
    ['nombres', 'edad', 'dni', 'celular', 'direccion', 'correo', 'fechaRegistro', 'actions'];

  constructor(
    private voluntariadoService: VolunteerService,
    private snackBar: MatSnackBar
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
  }

  fetchData() {
    this.voluntariadoService.getAll()
      .subscribe(data => {
        this.dataSource = data;
      })
  }

  deletePet(id: number) {
    if (confirm('Seguro?')) {
      this.voluntariadoService.deleteById(id).subscribe(
        r => {
          let snackbar = this.snackBar.open('Eliminacion exitosa', 'Undo', {
            duration: 2000
          });
          this.fetchData();
        }
      )
    }
  }

}
