package com.ironhack.pokemonjava.controller.dto;


public class TeamDTO {

    private Long trainer;

    private String[] pokemon;

    public TeamDTO(Long trainer, String[] pokemon) {
        this.trainer = trainer;
        this.pokemon = pokemon;
    }

    public TeamDTO() {
    }

    public Long getTrainer() {
        return trainer;
    }

    public void setTrainer(Long trainer) {
        this.trainer = trainer;
    }

    public String[] getPokemon() {
        return pokemon;
    }

    public void setPokemon(String[] pokemon) {
        this.pokemon = pokemon;
    }
}
