import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, delay, map, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from 'src/app/shared/model/country';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public selectRegion$ = new Subject<string | null>();
  public selectCountry$ = new Subject<string | null>();

  private _loading$ = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
    ) { }

  GetCountriesListByRegionName(name: string): Observable<Country[]> {
    this._loading$.next(true)
    const url = `https://restcountries.com/v3.1/region/${name}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        tap({
          finalize: () => { this._loading$.next(false) }
        }),
        catchError(this.handleError.bind(this))
      );
  }

  GetCountryDetailsByCountryName(name: string): Observable<Country> {
    this._loading$.next(true)
    const url = `https://restcountries.com/v3.1/name/${name}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(country => {
          country[0].currencies = Object.keys(country[0].currencies)
          return country[0]
        }),
        tap({
          finalize: () => { this._loading$.next(false) }
        }),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError<T>(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}