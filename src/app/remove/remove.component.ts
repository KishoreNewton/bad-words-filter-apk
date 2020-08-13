import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  @ViewChild('localStorage') localStorageInput
  @ViewChild('arrayButton') arrBtn
  @ViewChild('ul') ul: ElementRef
  constructor() { }

  ngOnInit() {}


  pushLocalStorage(value){
    let customFiler = JSON.parse(localStorage.getItem('userFilter'))
    localStorage.setItem("userFilter", JSON.stringify([...customFiler, value]))
    this.localStorageInput.nativeElement.value = ''
    this.arrBtn._disabled = true
    this.userSetFilters.push(value)
  }

  removeFromLocalStorage(value){
    this.userSetFilters = this.userSetFilters.filter((filter) => {
      return filter != this.userSetFilters[value]
    })
    localStorage.setItem("userFilter", JSON.stringify([...this.userSetFilters]))
  }
}
