import { Component, OnInit } from '@angular/core';

import { ColorData } from '../../services/color-data';
import { IColor } from '../../models/color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colorToolHeaderText = 'Color Tool!!!';

  colors: IColor[] = [];

  // private colorData: ColorData;

  // constructor(colorData: ColorData) {
  //   this.colorData = colorData;
  // }

  constructor(private colorData: ColorData) { }

  ngOnInit() {
    this.colorData
      .all()
      .subscribe(colors => this.colors = colors);
  }

  addColor(newColor: IColor) {
    this.colorData
      .append(newColor)
      .then(() => this.colorData.all().toPromise())
      .then(colors => this.colors = colors);
  }
}
