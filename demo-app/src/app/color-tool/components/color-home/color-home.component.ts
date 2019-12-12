import { Component, OnInit } from '@angular/core';

import { ColorData } from '../../services/color-data';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colorToolHeaderText = 'Color Tool!!!';

  colors: string[] = [];

  // private colorData: ColorData;

  // constructor(colorData: ColorData) {
  //   this.colorData = colorData;
  // }

  constructor(private colorData: ColorData) { }

  ngOnInit() {
    this.colors = this.colorData.all();
  }

  addColor(newColor: string) {
    this.colors = this.colors
      .concat(newColor);
  }
}
