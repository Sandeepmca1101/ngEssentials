import { Component,Input, Output,EventEmitter} from '@angular/core';


@Component({
    selector : 'app-user-comp',
    template : `
    <input type="text" [(ngModel)]="name">
     <p>Hello  {{ name }}</p>
               <p>UsrDefinedComponent</p>
      <app-user-detail></app-user-detail>
               `


})

export class UserComponent{
    @Input() name:string;
    @Output() nameChanged =new EventEmitter<string>();

    onUserInput(event){
         this.nameChanged.emit(event.target.value);
    }
}
