import { Component, OnInit } from '@angular/core';

import { PokemanService } from '~services/pokeman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Pokedex';

  constructor(private pokemanService: PokemanService) { }

  ngOnInit() {
      const caught = JSON.parse(localStorage.getItem('caught'));
      const wishList = JSON.parse(localStorage.getItem('wishList'));

      if (caught) {
        caught.map(entry => this.pokemanService.addToCaughtList(entry));
      }

      if (wishList) {
        wishList.map(entry => this.pokemanService.addToWishList(entry));
      }
  }
}
