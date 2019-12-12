import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditRowComponent } from './widget-edit-row.component';

describe('WidgetEditRowComponent', () => {
  let component: WidgetEditRowComponent;
  let fixture: ComponentFixture<WidgetEditRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
