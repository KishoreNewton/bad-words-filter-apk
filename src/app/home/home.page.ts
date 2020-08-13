import {Component, ViewChild, Renderer2, ElementRef} from '@angular/core';
import Filter from 'bad-words'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('clear') clean
  @ViewChild('textarea') textarea
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

  constructor(private renderer: Renderer2){

  }

  filterData(toggle, input) {
    if(toggle === 'null') toggle = ' '
    if(this.clean.nativeElement.value === null || this.clean.nativeElement.value === ''){
      const customFilter = new Filter({
        placeHolder: toggle
      })
      // console.log(customFilter.clean(input))
      this.addElement(customFilter.clean(input))
    } else  {
      const customFilter = new Filter({
        placeHolder: this.clean.nativeElement.value
      })
      // console.log(customFilter.clean(input))
      this.addElement(customFilter.clean(input))
    }
  }

  addElement(text){
    this.textarea.nativeElement.value = text
  }

  open(): void {
    
  }

  toggleInput() {
    this.isShow = !this.isShow
    if(this.isShow === true){
      this.custom = 'Custom'
      this.clean.nativeElement.value = ''
    } else {
      this.custom = 'Back'
    }
  }
}
