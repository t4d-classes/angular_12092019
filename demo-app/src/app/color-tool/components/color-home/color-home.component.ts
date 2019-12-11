import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colorToolHeaderText = 'Color Tool!!!';

  colors = [ 'red', 'green', 'blue' ];

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.colorForm = this.fb.group({
      color: '',
    });

  }

  addColor() {

    this.colors = this.colors
      .concat(this.colorForm.value.color);

  }

}
