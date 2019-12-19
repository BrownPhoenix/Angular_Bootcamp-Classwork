import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <products></products>
  <rating></rating>
  <button (click)="onClickMe($event)">
  Submit
  </button>`,
  })
export class AppComponent {
  title:string = 'My first Angular Project';
 // isValid = false;
 //class="btn btn-primrary" [class.disabled]="!isValid"


 onClickMe($event)
 {
   console.log("Clicked",$event);
  }
}

