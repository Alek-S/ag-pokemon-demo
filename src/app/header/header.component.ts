import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemanService } from '~services/pokeman.service';

/**
 * Static UI header component at the top of the page
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  wishSub$: Subscription;
  caughtSub$: Subscription;
  caughtCount = 0;
  wishCount = 0;

  constructor(private pokemanService: PokemanService) { }

  ngOnInit() {
    this.wishSub$ = this.pokemanService
      .wishlistObservable()
      .subscribe(list => this.wishCount = list.length);

    this.caughtSub$ = this.pokemanService
      .caughtObservable()
      .subscribe(list => this.caughtCount = list.length);
  }

  ngOnDestroy() {
    this.wishSub$.unsubscribe();
    this.caughtSub$.unsubscribe();
  }

}
