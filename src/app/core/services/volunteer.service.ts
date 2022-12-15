import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MascotaModel} from "../models/mascota.model";
import {VoluntariadoModel} from "../models/voluntariado.model";

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  url: string = environment.baseUrl + '/voluntarios'

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<VoluntariadoModel[]> {
    return this.http.get<VoluntariadoModel[]>(this.url);
  }

  public createOne(voluntariado: VoluntariadoModel): Observable<VoluntariadoModel> {
    return this.http.post<VoluntariadoModel>(
      this.url,
      voluntariado
    );
  }

  public deleteById(id: number): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`);
  }

}
