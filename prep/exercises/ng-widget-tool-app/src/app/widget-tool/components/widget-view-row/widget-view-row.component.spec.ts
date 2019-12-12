import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetViewRowComponent } from './widget-view-row.component';

describe('WidgetViewRowComponent', () => {
  let component: WidgetViewRowComponent;
  let fixture: ComponentFixture<WidgetViewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetViewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
