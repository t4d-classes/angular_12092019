import { Component } from '@angular/core';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  colorToolHeaderText = 'Color Tool!!!';

  colors = [ 'red', 'green', 'blue' ];

  addColor(newColor: string) {
    this.colors = this.colors
      .concat(newColor);
  }
}
