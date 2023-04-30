import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CountryService } from 'src/app/services/country/counrty.service';
import { Country } from 'src/app/shared/model/country';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource: MatTableDataSource<Country> = new MatTableDataSource();

  private unsubscribe$: Subject<void> = new Subject();

  public loading$: Observable<boolean>;

  regionName: string;
  countriesList: Country[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ){
    this.loading$ = this.countryService.loading$;
    this.regionName = this.activateRoute.snapshot.params['name']
    this.countryService.selectRegion$.next(this.regionName)
  }

  ngOnInit(): void {
    this.getCountriesList();
  }

  getCountriesList(){
    this.countryService.GetCountriesListByRegionName(this.regionName)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res)=> {  
      this.countriesList = res;
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openCountryDetails(country: Country){
    this.router.navigate(['countryDetails', country.name.official]);
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
