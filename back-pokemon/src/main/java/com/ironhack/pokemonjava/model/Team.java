package com.ironhack.pokemonjava.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long trainer;
    private String[] pokemon;


    public Team() {
    }

    public Team(String name, Long trainer, String[] pokemon) {
        this.name = name;
        this.trainer = trainer;
        this.pokemon = pokemon;
    }

    public Team(Long id) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
