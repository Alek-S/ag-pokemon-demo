import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Service to make api calls to pokemon server */
@Injectable({
  providedIn: 'root'
})
export class PokemanService {

  constructor(private http: HttpClient) { }

  getPokeman(startRow: number, offset: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=${startRow}`;
    return this.http.get(url);
  }
}
