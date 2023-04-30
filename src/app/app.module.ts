import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountriesComponent } from './components/continents/countries/countries.component';
import { CountryDetailsComponent } from './components/continents/countries/country-details/country-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContinentsComponent } from './components/continents/continents.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/style/material/material.module';
import { AboutMeComponent } from './components/footer/about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountriesComponent,
    CountryDetailsComponent,
    ContinentsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
