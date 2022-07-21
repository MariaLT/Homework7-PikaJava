package com.ironhack.pokemonjava.controller.dto;



public class TeamWithNameDTO {

    private Long id;
    private String owner;
    private String[] pokemons;

    public TeamWithNameDTO() {
    }

    public TeamWithNameDTO(Long id, String owner, String[] pokemons) {
        this.id = id;
        this.owner = owner;
        this.pokemons = pokemons;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String[] getPokemons() {
        return pokemons;
    }

    public void setPokemons(String[] pokemons) {
        this.pokemons = pokemons;
    }
}
