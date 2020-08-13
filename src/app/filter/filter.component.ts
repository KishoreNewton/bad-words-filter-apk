import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @ViewChild('localStorage') localStorageInput
  userSetFilters = JSON.parse(localStorage.getItem("userFilter"))
  constructor() { }

  ngOnInit() {}

  // localStore = localStorage.setItem("userFilter", JSON.stringify([]))

  pushLocalStorage(value){
    let customFiler = JSON.parse(localStorage.getItem('userFilter'))
    // customFiler.push(value)
    // console.log(customFiler)
    localStorage.setItem("userFilter", JSON.stringify([...customFiler, value]))
    this.localStorageInput.nativeElement.value = ''
    console.log(JSON.parse(localStorage.getItem("userFilter")))
  }

}
