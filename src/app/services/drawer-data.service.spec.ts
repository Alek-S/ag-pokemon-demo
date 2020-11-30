import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { isObservable } from 'rxjs';

import { DrawerDataService } from './drawer-data.service';
import { PokemanService } from './pokeman.service';

const mockDetails = {
  abilities: [],
  base_experience: 1,
  forms: [],
  game_indices: [],
  types: [],
  species: null,
  height: 2,
  id: 3,
  location_area_encounters: 'string',
  name: 'string',
  order: 4,
  weight: 4,
  moves: [],
  stats: [],
}

describe('DrawerDataService', () => {
  let pokemanService: PokemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: DrawerDataService = TestBed.get(DrawerDataService);
    expect(service).toBeTruthy();
  });

  it('should return an observable for drawerDataObservable', () => {
    const service = new DrawerDataService(pokemanService);
    const res = service.drawerDataObservable();
    expect(isObservable(res)).toBeTruthy();
  });

  it('should emit details from subscription after value is set', done => {
    const service = new DrawerDataService(pokemanService);
    service.drawerDataObservable().subscribe(data => {
      expect(data).toEqual(mockDetails);
      done();
    });
    service.setDrawerData(mockDetails);
  });
});
