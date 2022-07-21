package com.ironhack.pokemonjava.controller.dto;




public class PokemonDTO {
    private String pokemonName;

    public PokemonDTO() {
    }

    public PokemonDTO(String pokemonName) {
        this.pokemonName = pokemonName;
    }

    public String getPokemonName() {
        return pokemonName;
    }

    public void setPokemonName(String pokemonName) {
        this.pokemonName = pokemonName;
    }
}
