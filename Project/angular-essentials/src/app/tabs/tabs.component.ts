import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarsService]
})
export class TabsComponent implements OnInit {
  // characters  = [
  //   {name : ' Luke Skywalker', side: ''},
  //   {name : ' Darth Vader', side: ''},
  // ];
  characters = [];
  chosenList = 'all';
  swService: StarWarsService ;

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }


  ngOnInit() { }


  // getCharacter() {
  //   if (this.chosenList === 'all') {
  //     console.log(this.chosenList +  '=====================');
  //     return this.characters.slice();
  //   }
  //    return this.characters.filter((char) => {
  //       return char.side === this.chosenList;
  //    });
  // }



  onChoose(side) {
   this.chosenList = side;
  }

  getCharacter() {
 //   const swService = new StarWarsService();
    this.characters = this.swService.getCharacter(this.chosenList);
    // swService.getCharacter(this.chosenList);
   return this.characters;
  }

  // onSideChoosen( charInfo) {
  //   const pos = this.characters.findIndex((char) => {
  //      return char.name === charInfo.name;
  //    } )
  //   this.characters[pos].side = charInfo.side;
  // }

}
