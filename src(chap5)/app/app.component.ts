import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <bs-jumbotron></bs-jumbotron>
  `,
  })
export class AppComponent {
  title:string = 'This was my first Angular Project';
 // isValid = false;
 //class="btn btn-primrary" [class.disabled]="!isValid"


 onClickMe($event)
 {
   console.log("Clicked",$event);
  }
}

