import { Component, OnInit } from '@angular/core';

import { CarData } from '../../services/CarsService';

import { ICar } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: ICar[] = [];

  constructor(private carData: CarData) { }

  ngOnInit() {
    this.carData.all().then(cars => this.cars = cars);
  }

  doAddCar(newCar: ICar) {

    this.carData.append(newCar)
      .then(() => this.carData.all())
      .then(cars => this.cars = cars);
  }

  doDeleteCar(carId: number) {
    this.carData
      .remove(carId)
      .then(() => this.carData.all())
      .then(cars => this.cars = cars);
  }

}
