import { Component, OnInit } from '@angular/core';
import pets from 'src/app/mock/pets.mock';
import {Pet} from "../../../../core/models/pet.model";
import {ShelterService} from "../../../../core/services/shelter.service";
import {Observable} from "rxjs";
import {User} from "../../../../core/models/user.model";

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  pets$: Observable<Pet[] | null>;


  constructor(
    private shelterService: ShelterService
  ) {
    this.pets$ = shelterService.getShelterPets();
  }

  ngOnInit(): void {
  }

}
