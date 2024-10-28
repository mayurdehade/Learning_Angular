import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { User } from '../../models/user';

// function (this function we only create outside of export class)
function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css',
})
export class AdminProfileComponent {
  // parent to child communication @Input decorator
  // @Input() name = "" //for name attribute

  // @Input({alias: "userName"}) name = ""

  // transform name
  @Input({ alias: 'userName', transform: formatName }) name = '';

  @Input({ alias: 'userName'}) orginalName = '';

  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform:numberAttribute}) salary!: number;

  //child to parent communication @Output decorator
  //for passing value from child to parent then we required event we pass value in form of event. 
  //From child we emmit event and parent listen event and recive value

  //creating EventEmitter
  @Output() myEvent = new EventEmitter<User>()

  sendData() {
    //on button click this data is emmited

    this.myEvent.emit({name:this.orginalName, newSalary: this.salary+999});
  }
}
