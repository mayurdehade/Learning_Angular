import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  //creating mycolor property (for style binding)
  mycolor = 'blue';

  styleObj = {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  myclass = 'success';
  myclass2 = 'warning';
  myclass3 = 'denger';
  myclass4 = 'primary';

  txt: string = 'Welcome to TheKiranAcademy';
  txt1: string = 'Hello World';
  imgPath: string = 'assets/images/img1.jpeg';
  imgPath2: string = 'assets/images/img2.jpeg';
  imgPath3: string = 'assets/images/img3.jpeg';

  modelVal:string = ""

  a:number = 0
  b:number = 0
}
