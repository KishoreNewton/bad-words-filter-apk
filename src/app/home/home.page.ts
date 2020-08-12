import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  labels = [
    {
      color: 'purple',
      text: 'x'
    },
    {
      color: 'blue',
      text: '.'
    },
    {
      color: 'green',
      text: '-'
    },
    {
      color: 'yellow',
      text: '*'
    },
    {
      color: 'red',
      text: '_'
    }
  ]

  // constructor(
  //   public dialogRef: MatDialogRef<HomePage>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {}


  filterData() {
    
  }
}
