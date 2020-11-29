import { Injectable } from '@angular/core';
import {catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

import { CellClickEvent, Move, NameURL, Stat } from '~utils/interfaces';
import { PokemanService } from '~services/pokeman.service';

export interface PokemonDetails {
  abilities: any[];
  base_experience: number;
  forms: NameURL[];
  game_indices: any[];
  types: any[];
  species: NameURL;
  height: number;
  id: number;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
  moves: Move[];
  stats: Stat[];
}

/**
 * Gets data for individual pokemon and emits it back
 * out via observable.
 */
@Injectable({
  providedIn: 'root'
})
export class DrawerDataService {
  drawerData$ = new Subject<PokemonDetails>();

  constructor(private pokemanService: PokemanService) { }

  getDataForCell(event: CellClickEvent) {
    const { url } = event.data;
    this.pokemanService.getPokemonDetails(url)
      .pipe(
        catchError(error => {
          console.warn('Error calling API!', error);
          return of({});
        })
      )
      .subscribe(data => {
        this.setDrawerData(data);
      });
  }

  drawerDataObservable(): Observable<PokemonDetails> {
    return this.drawerData$;
  }

  setDrawerData(data: PokemonDetails): void {
    this.drawerData$.next(data);
  }
}
