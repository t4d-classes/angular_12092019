import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorData {

  private colors: string[] = [ 'red', 'yellow', 'blue' ];

  public all() {
    return this.colors.concat();
  }

  public append(color: string) {
    this.colors = this.colors.concat(color);
  }
}
