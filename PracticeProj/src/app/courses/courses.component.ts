import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = ["Full Stack Java Development", "AI & ML", "Full Stack Python Development", "MERN Stack", "MEAN Stack"]
}
