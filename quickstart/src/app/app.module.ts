import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopBarComponent }  from './topbar/topbar.component';
import { SliderComponent }  from './slider/slider.component';
import { HeaderComponent }  from './header/header.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopBarComponent, SliderComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
