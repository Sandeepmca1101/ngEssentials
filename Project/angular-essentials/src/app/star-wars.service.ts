

export class StarWarsService {
  private  characters = [
    {name : ' Luke Skywalker', side: ''},
    {name : ' Darth Vader', side: ''},
  ];


  getCharacter(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
     return this.characters.filter((char) => {
        return char.side === chosenList;
     })
  }
}