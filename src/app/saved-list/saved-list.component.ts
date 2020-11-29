import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemanService } from '~services/pokeman.service';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.scss']
})
export class SavedListComponent implements OnInit {
  caughtList = []
  wishList = [];
  wishSub$: Subscription;
  caughtSub$: Subscription;

  constructor(private pokemanService: PokemanService) { }

  ngOnInit() {
    this.caughtList = JSON.parse(localStorage.getItem('caught'));
    this.wishList = JSON.parse(localStorage.getItem('wishList'));
  }

}
