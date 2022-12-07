import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MascotaModel} from "../models/mascota.model";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url: string = environment.baseUrl + '/pets'
  constructor(
    private http: HttpClient
  ) { }

  public getById(id: string): Observable<MascotaModel> {
    return this.http.get<MascotaModel>(`${this.url}/${id}`);
  }
}
