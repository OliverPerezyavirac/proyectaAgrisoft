import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './appRouting.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    RoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
