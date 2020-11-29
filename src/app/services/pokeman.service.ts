import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

/**
 * Service to make api calls to pokemon server
 * and save pokemon to caught & wishlist
 */
@Injectable({
  providedIn: 'root'
})
export class PokemanService {
  caughtList: string[] = [];
  caughtList$ = new Subject<string[]>();

  wishList: string[] = [];
  wishList$ = new Subject<string[]>();

  constructor(private http: HttpClient) { }

  getPokeman(startRow: number, offset: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=${startRow}`;
    return this.http.get(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  // == CAUGHT LIST ==
  addToCaughtList(incoming: string): void {
    this.caughtList.push(incoming);
    this.caughtList = [...new Set(this.caughtList)];

    if (this.caughtList.length > 0) {
      localStorage.setItem('caught', JSON.stringify(this.caughtList));
    }

    this.caughtList$.next(this.caughtList);
  }

  caughtObservable(): Observable<string[]> {
    return this.caughtList$;
  }

  removeFromCaught(toRemove: string): void {
    this.caughtList = this.caughtList.filter(item => item !== toRemove);
    if (this.caughtList.length > 0) {
      localStorage.setItem('caught', JSON.stringify(this.caughtList));
    } else {
      localStorage.removeItem('caught');
    }

    this.caughtList$.next(this.caughtList);
  }

  // == WISH LIST ==
  addToWishList(incoming: string): void {
    this.wishList.push(incoming);
    this.wishList = [...new Set(this.wishList)];

    if (this.wishList.length > 0) {
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    }

    this.wishList$.next(this.wishList);
  }

  wishlistObservable(): Observable<string[]> {
    return this.wishList$;
  }

  removeFromWishlist(toRemove: string): void {
    this.wishList = this.wishList.filter(item => item !== toRemove);
    if (this.wishList.length > 0) {
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    } else {
      localStorage.removeItem('wishList');
    }

    this.wishList$.next(this.wishList);
  }
}
