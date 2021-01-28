import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @ViewChild('localStorage') localStorageInput
  userSetFilters = JSON.parse(localStorage.getItem("userFilter")) || []
  constructor(private renderer: Renderer2) { }

  ngOnInit() {}


  pushLocalStorage(value){
    if(!value) return
    let customFiler = JSON.parse(localStorage.getItem('userFilter')) || []
    localStorage.setItem("userFilter", JSON.stringify([...customFiler, value]))
    this.localStorageInput.nativeElement.value = ''
    this.userSetFilters.push(value)
  }

  removeFromLocalStorage(value){
    this.userSetFilters = this.userSetFilters.filter((filter) => {
      return filter != this.userSetFilters[value]
    })
    localStorage.setItem("userFilter", JSON.stringify([...this.userSetFilters]))
  }

}
