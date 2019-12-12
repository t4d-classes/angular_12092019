import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../../models/widget';

@Component({
  selector: '.widget-view-row',
  templateUrl: './widget-view-row.component.html',
  styleUrls: ['./widget-view-row.component.css']
})
export class WidgetViewRowComponent implements OnInit {

  @Input()
  widget: Widget = null;

  @Output()
  editWidget = new EventEmitter<number>();

  @Output()
  deleteWidget = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doEdit() {
    this.editWidget.emit(this.widget.id);
  }

  doDelete() {
    this.deleteWidget.emit(this.widget.id);
  }
}
