import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component {
  @ViewChild('drop', { static: false }) drop?: ElementRef;

  val?: number;

  arr: number[] = [1,2,3,4,5,6,7,8,9,10];
  getSelectedValue() {
    this.val = this.drop?.nativeElement.value;
  }

}
