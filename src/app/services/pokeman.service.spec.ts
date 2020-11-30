import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { isObservable } from 'rxjs';

import { PokemanService } from './pokeman.service';

describe('PokemanService', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClient = TestBed.get(HttpClientTestingModule);
});

  it('should be created', () => {
    const service: PokemanService = TestBed.get(PokemanService);
    expect(service).toBeTruthy();
  });

  it('should return an observable for caughtObservable', () => {
    const service = new PokemanService(httpClient);
    const res = service.caughtObservable();
    expect(isObservable(res)).toBeTruthy();
  });

  it('should return an observable for wishlistObservable', () => {
    const service = new PokemanService(httpClient);
    const res = service.wishlistObservable();
    expect(isObservable(res)).toBeTruthy();
  });
});
