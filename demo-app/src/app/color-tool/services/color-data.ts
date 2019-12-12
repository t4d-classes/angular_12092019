import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IColor } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorData {

  constructor(private httpClient: HttpClient) { }

  public all() {
    return this.httpClient
      .get<IColor[]>('http://localhost:3050/colors');
  }

  public append(color: IColor) {
    return this.httpClient
      .post<IColor>('http://localhost:3050/colors', color)
      .toPromise();
  }
}
