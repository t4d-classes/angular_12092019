import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

 // import { ColorData } from './services/color-data';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  declarations: [ ColorHomeComponent, ColorFormComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule,
  ],
  exports: [ ColorHomeComponent ],
  // providers: [ { provide: ColorData, useFactory: () => new ColorData() } ], // angular.service('colorData', someClass)
})
export class ColorToolModule { }
