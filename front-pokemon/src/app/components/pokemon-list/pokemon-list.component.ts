import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;

  constructor(
    private apiService: APIServiceService
    ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.apiService.getPokemons(24, this.page + 0)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;

      response.results.forEach((result: any) => { 
        this.apiService.getMoreDetails(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
      });
    });
    });
  }

}

