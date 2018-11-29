import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { AccesosComponent} from './accesos/accesos.component';
import { CarouselComponent} from './carousel/carousel.component';
@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    EventComponent,
    AccesosComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
