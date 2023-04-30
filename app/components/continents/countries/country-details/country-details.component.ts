import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country/counrty.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Country } from 'src/app/shared/model/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})

export class CountryDetailsComponent implements OnInit, OnDestroy {

  countryName: string;
  countryInfo: Country;

  private unsubscribe$: Subject<void> = new Subject();
  public loading$: Observable<boolean>;

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.loading$ = this.countryService.loading$;
    this.countryName = this.activateRoute.snapshot.params['name'];
    this.countryService.selectCountry$.next(this.countryName)
  }

  ngOnInit(): void {
    this.getCountryDetailsByCountryName();
  }

  getCountryDetailsByCountryName() {
    this.countryService.GetCountryDetailsByCountryName(this.countryName)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.countryInfo = res;
      })
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}