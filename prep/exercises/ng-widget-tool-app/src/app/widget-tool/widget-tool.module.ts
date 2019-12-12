import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { WidgetHomeComponent } from './components/widget-home/widget-home.component';
import { WidgetTableComponent } from './components/widget-table/widget-table.component';
import { WidgetEditRowComponent } from './components/widget-edit-row/widget-edit-row.component';
import { WidgetViewRowComponent } from './components/widget-view-row/widget-view-row.component';
import { WidgetFormComponent } from './components/widget-form/widget-form.component';


@NgModule({
  declarations: [
    WidgetHomeComponent, WidgetTableComponent,
    WidgetEditRowComponent, WidgetViewRowComponent,
    WidgetFormComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [
    WidgetHomeComponent,
  ]
})
export class WidgetToolModule { }
