import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokemanService } from './pokeman.service';

describe('PokemanService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PokemanService = TestBed.get(PokemanService);
    expect(service).toBeTruthy();
  });
});
