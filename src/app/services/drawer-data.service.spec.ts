import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DrawerDataService } from './drawer-data.service';

describe('DrawerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DrawerDataService = TestBed.get(DrawerDataService);
    expect(service).toBeTruthy();
  });
});
