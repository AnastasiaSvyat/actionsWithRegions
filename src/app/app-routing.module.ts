import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/continents/countries/countries.component';
import { CountryDetailsComponent } from './components/continents/countries/country-details/country-details.component';
import { ContinentsComponent } from './components/continents/continents.component';

const routes: Routes = [
  { path: 'continents', component: ContinentsComponent },
  { path: 'region/:name', component: CountriesComponent },
  { path: 'countryDetails/:name', component: CountryDetailsComponent },
  { path: '', redirectTo: 'continents', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
