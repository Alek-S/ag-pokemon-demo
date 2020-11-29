import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemonDetails, DrawerDataService } from '~services/drawer-data.service';
import { PokemanService } from '~services/pokeman.service';

interface NormalizedData {
  name: string;
  height: number;
  weight: number;
  moves: string[];
  stats: string[];
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  drawerData$: Subscription;
  normalizedData: NormalizedData;
  isVisible = false;

  constructor(
    private drawerDataService: DrawerDataService,
    private pokemanService: PokemanService
  ) { }

  ngOnInit() {
    this.drawerData$ = this.drawerDataService
      .drawerDataObservable()
      .subscribe( data => this.normalizeDrawerData(data));
  }

  /** filter and flatten api object to make it easier to handle */
  normalizeDrawerData(data: PokemonDetails) {
    this.normalizedData = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      moves: data.moves.map(entry => entry.move.name),
      stats: data.stats.map(entry => entry.stat.name),
    };
    this.isVisible = true;
  }

  /** add current pokemon to caught list */
  addToCaught() {
    this.pokemanService.addToCaughtList(this.normalizedData.name);
  }

  /** add current pokemon to wishlist */
  addToWishlist() {
    this.pokemanService.addToWishList(this.normalizedData.name);
  }

  /** hide drawer from UI when 'x' button clicked */
  handleClose() {
    this.isVisible = false;
  }

  ngOnDestroy() {
    this.drawerData$.unsubscribe();
  }

}
