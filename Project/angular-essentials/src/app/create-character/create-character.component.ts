import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'none', value: '' },
    {display: 'Light' , value: 'Light'},
    {display: 'Dark' , value: 'dark'}
  ] ;
  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
       return ;
    }
    console.log("OnSubmit" + submittedForm.value.name);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
