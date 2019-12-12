import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../../models/widget';

@Component({
  selector: 'widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.css'],
})
export class WidgetTableComponent {

  @Input()
  widgets: Widget[] = [];

  @Input()
  editWidgetId = 0;

  @Output()
  editWidget = new EventEmitter<number>();

  @Output()
  deleteWidget = new EventEmitter<number>();

  @Output()
  saveWidget = new EventEmitter<Widget>();

  @Output()
  cancelWidget = new EventEmitter<void>();

  doEdit(widgetId: number) {
    this.editWidget.emit(widgetId);
  }

  doDelete(widgetId: number) {
    this.deleteWidget.emit(widgetId);
  }

  doSave(widget: Widget) {
    this.saveWidget.emit(widget);
  }

  doCancel() {
    this.cancelWidget.emit();
  }

}
