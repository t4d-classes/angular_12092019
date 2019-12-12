import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WidgetToolModule } from './widget-tool/widget-tool.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WidgetToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
