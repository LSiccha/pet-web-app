import { Component, OnInit } from '@angular/core';
import pets from 'src/app/mock/pets.mock';
import {Pet} from "../../../../core/models/pet.model";

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  pets: Pet[] = pets;

  constructor() { }

  ngOnInit(): void {
  }

}
