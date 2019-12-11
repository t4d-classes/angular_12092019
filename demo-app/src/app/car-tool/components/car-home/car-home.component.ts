import { Component } from '@angular/core';

import { ICar } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  headerText = 'Car Tool';

  cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
  ];

  addCar(newCar: ICar) {

    this.cars = this.cars.concat({
      ...newCar,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });

  }

}
