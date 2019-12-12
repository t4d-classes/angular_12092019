import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}
