import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <topbar></topbar>
  <slider></slider>
  
 <header></header>
 <h1>Hello {{name}}</h1>
  `,
})
export class AppComponent  { name = 'Angular'; }
