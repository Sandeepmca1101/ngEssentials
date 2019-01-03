import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters  = [
    {name : ' Luke Skywalker', side: ''},
    {name : ' Darth Vader', side: ''},
  ];
  chosenList = 'all';
  constructor() { }

  ngOnInit() { }


  getCharacter() {
    if (this.chosenList === 'all') {
      console.log(this.chosenList +  '=====================');
      return this.characters.slice();
    }
     return this.characters.filter((char) => {
        return char.side === this.chosenList;
     });
  }
  // getCharacter() {
  //   const swService = new StarWarsService();
  //   swService.getCharacter(this.chosenList);
  //   console.log(this.characters +"=====================");
  //   return this.characters;
  // }

  onChoose(side) {
   this.chosenList = side;
  }
  onSideChoosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
       return char.name === charInfo.name;
     } );
    this.characters[pos].side = charInfo.side;
  }

}
