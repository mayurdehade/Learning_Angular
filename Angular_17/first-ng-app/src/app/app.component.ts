import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './models/user';

@Component({
  //selector tag
  selector: 'app-root',

  //standalone component -> directly use
  standalone: true,

  //for routing
  imports: [
    RouterOutlet,
    UserProfileComponent,
    AdminProfileComponent,
    CommonModule,
  ],

  //HTML page url
  templateUrl: './app.component.html',

  //inline HTML
  // template: `
  // <h1>Hello form ts</h1>
  // `,

  //css file
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    { name: 'ramesh', isSingle: true, salary: 10000 },
    { name: 'suresh', isSingle: false, salary: 20000 },
    { name: 'nitesh', isSingle: true, salary: 30000 },
  ];

  receveData(e: User) {
    console.log(e);

    //iterate over user and find index of user
    const UserIndex = this.users.findIndex((user) => user.name == e.name);
    //update salary
    this.users[UserIndex].salary = e.newSalary;
  }
}
