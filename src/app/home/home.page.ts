import { Component, ViewChild, Renderer2, ElementRef } from "@angular/core";
import * as Filter from '../badwords'

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild("clear") clean: any;
  @ViewChild("textarea") textarea: ElementRef;
  isShow = true;
  custom = "Custom";
  labels = [
    {
      color: "purple",
      text: "x",
    },
    {
      color: "blue",
      text: ".",
    },
    {
      color: "green",
      text: "-",
    },
    {
      color: "yellow",
      text: "*",
    },
    {
      color: "red",
      text: "_",
    },
    {
      color: "gray",
      text: "null",
    },
  ];

  constructor(private renderer: Renderer2) {}

  filterData(toggle: string, input: string) {
    if (toggle === "null") toggle = " ";
    const newBadWords = JSON.parse(localStorage.getItem("userFilter")) || [];
    const removeWords = JSON.parse(localStorage.getItem("removeFilter")) || [];
    if (
      this.clean.nativeElement.value === null ||
      this.clean.nativeElement.value === ""
    ) {
      const customFilter = new Filter({
        placeHolder: toggle,
      });
      customFilter.addWords(...newBadWords);
      customFilter.removeWords(...removeWords);
      this.addElement(customFilter.clean(input));
    } else {
      const customFilter = new Filter({
        placeHolder: this.clean.nativeElement.value,
      });
      customFilter.addWords(...newBadWords);
      customFilter.removeWords(...removeWords);
      this.addElement(customFilter.clean(input));
    }
  }

  addElement(text: string) {
    this.textarea.nativeElement.value = text;
  }

  toggleInput() {
    this.isShow = !this.isShow;
    if (this.isShow === true) {
      this.custom = "Custom";
      this.clean.nativeElement.value = "";
    } else {
      this.custom = "Back";
    }
  }
}
