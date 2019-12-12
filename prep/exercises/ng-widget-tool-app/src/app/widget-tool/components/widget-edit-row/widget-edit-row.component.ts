import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Widget } from '../../models/widget';

@Component({
  selector: '.widget-edit-row',
  templateUrl: './widget-edit-row.component.html',
  styleUrls: ['./widget-edit-row.component.css']
})
export class WidgetEditRowComponent implements OnInit {

  @Input()
  widget: Widget;

  @Output()
  saveWidget = new EventEmitter<Widget>();

  @Output()
  cancelWidget = new EventEmitter<void>();

  editWidgetForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editWidgetForm = this.fb.group({
      name: this.widget.name,
      description: this.widget.description,
      color: this.widget.color,
      size: this.widget.size,
      quantity: this.widget.quantity,
    });
  }

  doSave() {
    this.saveWidget.emit({
      ...this.editWidgetForm.value,
      id: this.widget.id,
    });
  }

  doCancel() {
    this.cancelWidget.emit();
  }

}
