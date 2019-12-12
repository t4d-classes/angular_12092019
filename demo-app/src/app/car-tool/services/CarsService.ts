import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICar } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarData {

  constructor(private httpClient: HttpClient) { }

  public all() {
    return this.httpClient
      .get<ICar[]>('http://localhost:3060/cars')
      .toPromise();
  }

  public append(car: ICar) {
    return this.httpClient
      .post<ICar>('http://localhost:3060/cars', car)
      .toPromise();
  }

  public replace(car: ICar) {
    return this.httpClient
      .put<ICar>(`http://localhost:3060/cars/${encodeURIComponent(String(car.id))}`, car)
      .toPromise();
  }

  public remove(carId: number) {
    return this.httpClient
      .delete<void>(`http://localhost:3060/cars/${encodeURIComponent(String(carId))}`)
      .toPromise();
  }


}
