import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemonDetails, DrawerDataService } from '~app/drawer-data.service';

interface NormalizedData {
  name: string;
  height: number;
  weight: number;
  moves: string[];
  stats: string[];
}

const mock: NormalizedData = {
  name: 'alek',
  height: 64,
  weight: 140,
  moves: ['right', 'left', 'up', 'down'],
  stats: ['right', 'left', 'up', 'down'],
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  drawerData$: Subscription;
  normalizedData: NormalizedData = mock;
  isVisible = true;

  constructor(private drawerDataService: DrawerDataService) { }

  ngOnInit() {
    this.drawerData$ = this.drawerDataService
      .drawerDataObservable()
      .subscribe( data => this.normalizeDrawerData(data));
  }

  normalizeDrawerData(data: PokemonDetails) {
    this.normalizedData = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      moves: data.moves.map(entry => entry.move.name),
      stats: data.stats.map(entry => entry.stat.name),
    };
    this.isVisible = true;
    console.log('normalized', this.normalizedData);
  }

  handleClose() {
    console.log('close');
    this.isVisible = false;
  }

  ngOnDestroy() {
    this.drawerData$.unsubscribe();
  }

}
