import { TestBed } from '@angular/core/testing';

import { ColorData2Service } from './color-data2.service';

describe('ColorData2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorData2Service = TestBed.get(ColorData2Service);
    expect(service).toBeTruthy();
  });
});
