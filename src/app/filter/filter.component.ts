import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @ViewChild('localStorage') localStorageInput
  @ViewChild('arrayButton') arrBtn
  @ViewChild('ul') ul: ElementRef
  userSetFilters = JSON.parse(localStorage.getItem("userFilter"))
  constructor() { }

  ngOnInit() {}

  pushLocalStorage(value){
    if(!value) return
    let customFiler = JSON.parse(localStorage.getItem('userFilter'))
    localStorage.setItem("userFilter", JSON.stringify([...customFiler, value]))
    this.localStorageInput.nativeElement.value = ''
    // this.arrBtn._disabled = true
    this.userSetFilters.push(value)
  }

  removeFromLocalStorage(value){
    if(!value) return
    this.userSetFilters = this.userSetFilters.filter((filter) => {
      return filter != this.userSetFilters[value]
    })
    localStorage.setItem("userFilter", JSON.stringify([...this.userSetFilters]))
  }

}
