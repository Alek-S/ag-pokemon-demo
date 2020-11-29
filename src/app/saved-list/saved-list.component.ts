import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemanService } from '~services/pokeman.service';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.scss']
})
export class SavedListComponent implements OnInit {
  caughtList = localStorage.getItem('caught')
  ? JSON.parse(localStorage.getItem('caught'))
  : [];
  wishList = localStorage.getItem('wishList')
  ? JSON.parse(localStorage.getItem('wishList'))
  : [];
  wishSub$: Subscription;
  caughtSub$: Subscription;

  constructor(private pokemanService: PokemanService) { }

  ngOnInit() {
    this.wishSub$ = this.pokemanService
      .wishlistObservable()
      .subscribe(list => this.wishList = list);

    this.caughtSub$ = this.pokemanService
      .caughtObservable()
      .subscribe(list => this.caughtList = list);
  }

  removeFromCaught(value: string) {
    this.pokemanService.removeFromCaught(value);
  }

  removeFromWishlist(value: string) {
    this.pokemanService.removeFromWishlist(value);
  }

}
