import {Component} from '@angular/core';
import Filter from 'bad-words'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isShow = true
  custom = 'Custom'

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
    },
    {
      color: 'gray',
      text: 'null'
    }
  ]

  // constructor(
  //   public dialogRef: MatDialogRef<HomePage>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {}


  filterData(toggle, input) {
    if(toggle === 'null'){
      toggle = ' '
    }
    const customFilter = new Filter({
      placeHolder: toggle
    })
    console.log(customFilter.clean('Dont be asshole here'))
  }

  open() {
    
  }

  toggleInput(value) {
    this.isShow = !this.isShow
    if(this.isShow === true){
      this.custom = 'Custom'
      value = ''
    } else {
      this.custom = 'Back'
    }
  }

}
