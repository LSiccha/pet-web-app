import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pet} from "../models/pet.model";
import pets from "../../mock/pets.mock";

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor() { }

  public getShelterPets() : Observable<Pet[]> {
    return new Observable<Pet[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(pets);
        subscriber.complete();
      }, 1000);
    })
  };
}
