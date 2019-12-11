import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColorForm = new EventEmitter<string>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      color: '',
    });
  }

  submitColor() {
    this.submitColorForm.emit(this.colorForm.value.color);
    this.colorForm.reset();
  }
}
