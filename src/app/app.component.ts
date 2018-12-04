// Import { Member name } from 'path to member'
import { Component } from '@angular/core';

// Metadata
@Component({
  // the name of the 'Directive' (custom HTML tag) to place the component  
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Class
// Naming convention 'FeatureName' suffixed with 'Component'
// conventional name for root application component is 'AppComponent'
export class AppComponent {
  // Property 
  title = 'Angular: Getting Started';
}
