import { Component,Input } from '@angular/core';

@Component({
    selector:'bs-jumbotron',
    template:`
             <div class="jumbotron">
              <h1>hello world</h1>
              <p>This is a simple hero unit </p>
              <div class="button">
              Learn More
              </div>
              </div>`
})

export class JumboTronComponent{
    
}

//* <div class="jumbotron">    <p> <ng-content></ng-content> </p>  <p><a href="#" role="button"></a></p> </div>