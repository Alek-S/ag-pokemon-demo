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
    console.log('caught', this.caughtList);
    this.caughtList$.next(this.caughtList);
  }
  caughtObservable(): Observable<string[]> {
    return this.caughtList$;
  }

  // == WISH LIST ==
  addToWishList(incoming: string): void {
    this.wishList.push(incoming);
    this.wishList = [...new Set(this.wishList)];
    console.log('wish', this.wishList);
    this.wishList$.next(this.wishList);
  }
  wishlistObservable(): Observable<string[]> {
    return this.wishList$;
  }
}
