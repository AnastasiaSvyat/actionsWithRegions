import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private dialog: MatDialog,
  ) { }

  aboutMe() {
    const dialogRef = this.dialog.open(AboutMeComponent, {
      width: '470px',
      height: '550px',
    });
  }

}
