//3rd add import
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

//2nd add '@Component' deorator
@Component({
    //4th add '@Component' decorator properties
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

//1st create exported class
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }

}