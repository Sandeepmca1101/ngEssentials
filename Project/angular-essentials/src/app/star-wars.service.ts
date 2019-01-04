import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
  private  characters = [
    {name : ' Luke Skywalker', side: ''},
    {name : ' Darth Vader', side: ''},
  ];
 private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacter(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
     return this.characters.filter((char) => {
        return char.side === chosenList;
     });
  }
  onSideChoosen(charInfo) {
      const pos = this.characters.findIndex((char) => {
         return char.name === charInfo.name;
       } );
      this.characters[pos].side = charInfo.side;
      this.logService.writeLog('changed Side of ' + charInfo.name + ' ,new Side ' + charInfo.side);
    }

   addCharacter(name, side) {
     const pos = this.characters.findIndex((char) => {
      return char.name === name;
     } );
     if ( pos !== -1) {
       return ;
     }
      const newChar = { name: name , side: side};
      this.characters.push(newChar);
      console.log(this.characters);
   }
}
