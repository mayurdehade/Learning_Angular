import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students = [
    {
      name: 'Kiran',
      rno: 101,
      marks: 75,
      stream: 'Mechanical',
    },
    {
      name: 'Sri',
      rno: 102,
      marks: 80,
      stream: 'Civil',
    },
    {
      name: 'Mayur',
      rno: 103,
      marks: 85,
      stream: 'Electrical',
    },
    {
      name: 'Dipak',
      rno: 104,
      marks: 87,
      stream: 'Computer',
    },
    {
      name: 'Ashutosh',
      rno: 105,
      marks: 95,
      stream: 'Chemical',
    },
  ];
}
