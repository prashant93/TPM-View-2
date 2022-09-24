import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OffersComponent } from './offers/offers.component';
import { ProspectsComponent } from './prospects/prospects.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    OffersComponent,
    ProspectsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
