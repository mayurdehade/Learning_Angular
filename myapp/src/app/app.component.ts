import { Component } from '@angular/core';
// Component is interface which is imported

//Decorator which provide metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

  //Data Types in typescript
  // number, string, boolean, null, undefined
  // null and undefined is misslenous data types
  // null is data type and also value

  //variable declaration
  num: number = 30;
  num1 = 39; //number (internally)
  str: string = 'Welcome';
  str1 = 'Welcome again';
  bool: boolean = true;
  bool1 = false;
  greet = 'Hello World';

  //declare array in ts
  arr = ['Java', 'C++', 'Python', 'JavaScript'];

  //Data Binding - from ts layer to template layer
  //Through string interpollation {{}} we can bind data from ts to template

  //Creating Object: key and value pair structure
  student = {
    name: 'John',
    age: 23,
    city: 'Pune',
    marks: 54,
  };

  //function declaration
  hello() {
    console.log('Hello World');
    return this.greet; //this is required which refers to instance
  }

  //array of object
  emploee_info = [
    {
      empno: 123,
      ename: 'Rocky',
      country: 'India',
      salary: 40000,
    },
    {
      empno: 413,
      ename: 'Mondy',
      country: 'US',
      salary: 80000,
    },
    {
      empno: 153,
      ename: 'Scott',
      country: 'UK',
      salary: 48000,
    },
    {
      empno: 124,
      ename: 'Mark',
      country: 'NP',
      salary: 60000,
    },
  ];
}
