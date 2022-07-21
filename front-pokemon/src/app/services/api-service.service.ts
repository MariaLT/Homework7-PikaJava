import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http:HttpClient) { }

  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getMoreDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

}
