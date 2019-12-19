import { Component,Input } from "@angular/core";

@Component({
    selector:'rating',
    templateUrl:'rating.component.html',
    styles:[`.glyphicon-star{color:green;}`]
   
})
export class RatingComponent{
@Input()rating = 0;
@Input()numOfReviews=0;
    onClick(ratingValue){
        this.rating=ratingValue;
    }
}