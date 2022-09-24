import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HeaderComponent, OffersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
