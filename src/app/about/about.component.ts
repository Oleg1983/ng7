import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  numbers: number[] = [];
  otherNumbers: number[] = [];

  constructor() {
    for (let i = 0; i < 6; i++ ) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,  event.previousIndex, event.currentIndex);
      // console.log(event);
      // console.log(this.numbers);
      // console.log(this.otherNumbers);

    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
      moveItemInArray(this.otherNumbers, event.previousIndex, event.currentIndex);
    }
  }

}
