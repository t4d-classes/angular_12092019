import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
  ];

  carForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  addCar() {

    this.cars = this.cars.concat({
      ...this.carForm.value,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });

  }

}
