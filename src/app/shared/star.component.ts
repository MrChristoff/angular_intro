//3rd add import
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

//2nd add '@Component' decorator
@Component({
    //4th add '@Component' decorator properties
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

//1st create exported class
export class StarComponent implements OnChanges {
    // input allows data to be passed to this component from the parent component in the template
    // [rating]='product.starRating'
    @Input() rating: number;
    starWidth: number;
    // output makes data available to parent component in the template, the emitted data
    // is available as $event
    // (ratingClicked)='onRatingClicked($event)'
    // TODO can this be injected?
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    // click event, in nested components template, calls the EventEmitter and passes the data
    onClick(): void {
        this.ratingClicked.emit(`, The rating ${this.rating} was clicked`)
    }
}