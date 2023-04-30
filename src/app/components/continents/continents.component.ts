import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Continens } from 'src/app/shared/continents';
import { Continent } from 'src/app/shared/model/continent';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit {

  continents: Continent[] = Continens;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  openCountriesList(name: string) {
    this.router.navigate(['region', name]);
  }

}
