import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = [
    {
      empno: 11223,
      ename: 'John',
      sal: 50000,
      job: "HR",
      deptno: 12
    },
    {
      empno: 11224,
      ename: 'Smith',
      sal: 60000,
      job: "Manager",
      deptno: 10
    },
    {
      empno: 11225,
      ename: 'Peter',
      sal: 70000,
      job: "Developer",
      deptno: 11
    },
    {
      empno: 11226,
      ename: 'Marry',
      sal: 80000,
      job: "HR",
      deptno: 12
    },
    {
      empno: 11227,
      ename: 'Tony',
      sal: 90000,
      job: "Manager",
      deptno: 10
    }
  ]
}
