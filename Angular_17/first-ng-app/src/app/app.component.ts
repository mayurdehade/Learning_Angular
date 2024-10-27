import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

@Component({
  //selector tag
  selector: 'app-root',

  //standalone component -> directly use
  standalone: true,

  //for routing
  imports: [RouterOutlet, UserProfileComponent],

  //HTML page url
  templateUrl: './app.component.html',

  //inline HTML
  // template: `
  // <h1>Hello form ts</h1>
  // `,
  
  //css file
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
