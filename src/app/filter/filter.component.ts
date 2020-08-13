import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  customFilter = [] 
  storedName = []

  constructor() { }

  ngOnInit() {}

  pushLocalStorage(event){
    this.customFilter.push(event.value)
    localStorage.setItem("customFilter", JSON.stringify(this.customFilter))
    const store = JSON.parse(localStorage.getItem("customFilter"))
    this.storedName = [...this.storedName, store]
    console.log(this.storedName)
  }

}
