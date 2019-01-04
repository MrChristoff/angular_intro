// imprt from libraries, app modules or Angular
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './product.service';

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
   errorMessage: string;
   
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
   products: IProduct[] = [];

   /*
   Uncommented constructor is syntactic sugar for this commented constructer.

   private _productService;
   constructor(productService: ProductService)  {
     this._productService = productService;
   }  
   */

   // DI a service
   constructor(private productService: ProductService)  {
   }
   
   // this function is called, with the param supplied via the nested components emitter (@Output), in the view template 
   onRatingClicked(message: string): void {
      this.pageTitle = 'Product - List' + message;
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
      // this.products = this.productService.getProducts();
      this.productService.getProducts().subscribe(
         products => {
            this.products = products;
            this.filteredProducts = this.products;
         },
         error => this.errorMessage = <any>error
      );
   }
}
