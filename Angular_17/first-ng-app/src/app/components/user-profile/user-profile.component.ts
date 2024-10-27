import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//decorator
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name:string = "ramesh"
  status:string = "single"
  salary:number = 40000

  isButtonDisable = true

  inputVal = "test"

  inputValue = ""

  //function
  onChange(e:Event) {
    //accessing value of input tag
    const value = (e.target as HTMLInputElement).value
    console.log(value);
    this.inputVal = value
  }

  users = [
    {name: "ramesh", salary: 10000},
    {name: "suresh", salary: 20000},
    {name: "nitesh", salary: 30000}
  ]

}
