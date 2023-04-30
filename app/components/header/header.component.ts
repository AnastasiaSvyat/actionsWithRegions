import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/country/counrty.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public countryService: CountryService,
    private location: Location
  ) { }

  back() {
    this.countryService.selectRegion$.next(null)
    this.countryService.selectCountry$.next(null)
    this.location.back();
  }
}