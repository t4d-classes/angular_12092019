import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars = [];

  constructor() { }

  ngOnInit() {
  }

}
