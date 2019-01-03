import { Component } from '@angular/core';
import { random } from 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  value = 0;
  rootName = 'ComponentRootname';

  OnNameChanged(newName) {
    this.rootName = newName;
  }

  onclickButton() {
    console.log(" Hi ");
  //this.value = this.value + 1;
  this.value = random(1,9);
  }
}
