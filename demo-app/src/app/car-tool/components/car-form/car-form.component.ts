import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ICar } from '../../models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCarForm = new EventEmitter<ICar>();

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

  // inside of car-form template
  submitCar() {

    // outside of car-form template
    this.submitCarForm.emit(this.carForm.value);

    this.carForm.reset();

  }

}
