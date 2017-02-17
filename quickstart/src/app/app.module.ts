import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopBarComponent }  from './topbar/topbar.component';
import { SliderComponent }  from './slider/slider.component';
import { PopularComponent }  from './popular/popular.component';
import { SignupComponent }  from './signup/signup.component';
import { FooterComponent }  from './footer/footer.component';
import { HeaderComponent }  from './header/header.component';
import { TopicsComponent }  from './topics/topics.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopBarComponent, SliderComponent, TopicsComponent, PopularComponent, SignupComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
