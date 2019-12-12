import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Widget } from '../../models/widget';

@Component({
  selector: 'widget-form',
  templateUrl: './widget-form.component.html',
  styleUrls: ['./widget-form.component.css']
})
export class WidgetFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Widget';

  @Output()
  submitWidget = new EventEmitter<Widget>();

  widgetForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.widgetForm = this.fb.group({
      name: '',
      description: '',
      color: '',
      size: '',
      quantity: 0,
    });
  }

  doSubmitWidget() {

    this.submitWidget.emit({
      ...this.widgetForm.value,
    });

    this.widgetForm.setValue({
      name: '',
      description: '',
      color: '',
      size: '',
      quantity: 0,
    });

  }

}
