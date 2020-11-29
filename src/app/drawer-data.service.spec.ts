import { TestBed } from '@angular/core/testing';

import { DrawerDataService } from './drawer-data.service';

describe('DrawerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawerDataService = TestBed.get(DrawerDataService);
    expect(service).toBeTruthy();
  });
});
