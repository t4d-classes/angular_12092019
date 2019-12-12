import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IColor } from '../../models/color';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColorForm = new EventEmitter<IColor>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      color: '',
    });
  }

  submitColor() {
    this.submitColorForm.emit({ name: this.colorForm.value.color });
    this.colorForm.reset();
  }
}
