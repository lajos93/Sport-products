import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <topbar></topbar>
  <slider></slider>
  <topics></topics>
  <popular></popular>
  <signup></signup>
   <footer></footer>
  `,
})
export class AppComponent  { name = 'Angular'; }
