import { Component } from '@angular/core';

import { Widget } from '../../models/widget';

@Component({
  selector: 'widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.css']
})
export class WidgetHomeComponent {

  headerText = 'Widget Tool';

  widgets: Widget[] = [
    { id: 1, name: 'Red Small Widget', description: 'A small, red widget.', color: 'red', size: 'small', quantity: 45 },
    { id: 2, name: 'Blue Large Widget', description: 'A large, blue widget.', color: 'blue', size: 'large', quantity: 10 },
  ];

  editWidgetId = -1;

  doEditWidget(widgetId) {
    this.editWidgetId = widgetId;
  }

  doCancelWidget() {
    this.editWidgetId = -1;
  }

  doDeleteWidget(widgetId) {
    this.widgets = this.widgets.filter(w => w.id === widgetId);
    this.editWidgetId = -1;
  }

  doReplaceWidget(widget: Widget) {
    const widgetIndex = this.widgets.findIndex(w => w.id === widget.id);
    const newWidgets = this.widgets.concat();
    newWidgets[widgetIndex] = widget;
    this.widgets = newWidgets;
    this.editWidgetId = -1;
  }

  doAppendWidget(newWidget: Widget) {
    this.widgets = this.widgets.concat({
      ...newWidget,
      id: Math.max(...this.widgets.map(w => w.id), 0) + 1,
    });
    this.editWidgetId = -1;
  }

}
