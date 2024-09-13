import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css']
})
export class DirectiveCompComponent {

  show:boolean = true;
  // show:boolean = false;

  //creating object
  players = [
    {
      pname: "Rohit",
      city: "Mumbai",
      runs: 3000,
      team: "MI",
    },
    {
      pname: "Dhoni",
      city: "Ranchi",
      runs: 2000,
      team: "CSK",
    },
    {
      pname: "Kohli",
      city: "Delhi",
      runs: 4000,
      team: "RCB",
    },
    {
      pname: "Jadeja",
      city: "Chennai",
      runs: 5000, 
      team: "DC",
    },
    {
      pname: "Pant",
      city: "Kolkata",
      runs: 1000,
      team: "KKR",
    },
    {
      pname: "Dhawan",
      city: "Hyderabad",
      runs: 6000,
      team: "SRH",
    }
  ]
}
