// imprt from libraries, app modules or Angular
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

// '@Component' Decorator to make the class a Component and define Metadata 
// selector = custom html tag to be placed in html 
// templateUrl = the html template to be rendered within the selector. 
// styleUrls = link(s) to style sheet - encapsulated in this component
@Component({
   selector: 'pm-products',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
})

// 'export' in class signature to make code available to other classes
// 'implements' in class signature to implement the Angular 'OnInit' interface
export class ProductListComponent implements OnInit{
   pageTitle: string = 'Product - List';
   imageWidth: number = 70;
   imageMargin: number = 2;
   showImage: boolean = true;
   
   /* 
     the _listFilter propery has getter/setter so when the two way data binding requests the data it accesses the getter,
     when the data binding modifies the data (from user input) it accesses the setter.
     Logic to perform when the value is changed can be put in the setter.
   */
   _listFilter: string;
   public get listFilter(): string {
      return this._listFilter
   }
   public set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
   }
   
   filteredProducts: IProduct[];
   products: IProduct[] = [
      {
         "productId": 2,
         "productName": "Garden Cart",
         "productCode": "GDN-0023",
         "releaseDate": "March 18, 2016",
         "description": "15 gallon capacity rolling garden cart",
         "price": 32.99,
         "starRating": 4.2,
         "imageUrl": "https://openclipart.org/image/400px/svg_to_png/179460/spitfire.png"
       },
       {
         "productId": 5,
         "productName": "Hammer",
         "productCode": "TBX-0048",
         "releaseDate": "May 21, 2016",
         "description": "Curved claw steel hammer",
         "price": 8.9,
         "starRating": 4.8,
         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/235877/Avro-Lancaster.png"
       }
   ];

   constructor()  {
      this.filteredProducts = this.products;
      this.listFilter = 'cart';
   }

   performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) => 
         product.productName.toLowerCase().indexOf(filterBy) !== -1)
   }

   toggleImage(): void {
      this.showImage = !this.showImage;
   }
   // Lifecycle hook, interface imported from Angular and implemented here  
   // https://angular.io/guide/lifecycle-hooks
   ngOnInit(): void{
      console.log('In OnInit');
   }
}