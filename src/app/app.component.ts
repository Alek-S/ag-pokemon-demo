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
      JSON
        .parse(localStorage.getItem('caught'))
        .map(entry => this.pokemanService.addToCaughtList(entry));

      JSON
        .parse(localStorage.getItem('wishList'))
        .map(entry => this.pokemanService.addToWishList(entry));
  }
}
