import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  @ViewChild('removeStorage') removeStorageInput
  removeFilters = JSON.parse(localStorage.getItem("removeFilter")) || []
  constructor(private renderer: Renderer2) { }

  ngOnInit() {}


  pushLocalStorage(value){
    if(!value) return
    let customFiler = JSON.parse(localStorage.getItem('removeFilter')) || []
    console.log(customFiler)
    localStorage.setItem("removeFilter", JSON.stringify([...customFiler, value]))
    this.removeStorageInput.nativeElement.value = ''
    this.removeFilters.push(value)
  }

  removeFromLocalStorage(value){
    this.removeFilters = this.removeFilters.filter((filter) => {
      return filter != this.removeFilters[value]
    })
    localStorage.setItem("removeFilter", JSON.stringify([...this.removeFilters]))
  }
}
