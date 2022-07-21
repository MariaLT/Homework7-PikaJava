package com.ironhack.pokemonjava.controller.impl;

import com.ironhack.pokemonjava.controller.dto.PokemonDTO;
import com.ironhack.pokemonjava.controller.dto.TeamDTO;
import com.ironhack.pokemonjava.controller.dto.TeamWithNameDTO;
import com.ironhack.pokemonjava.model.Team;
import com.ironhack.pokemonjava.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/{id}")
    public TeamWithNameDTO getTeam(@PathVariable(name="id") Long id){
        return teamService.getTeamByTrainer(id);
    }

    @GetMapping
    public List<TeamWithNameDTO> getAllTeams() {
        return teamService.getAllTeams();
    }

    @PutMapping
    public Team amendTeam(@RequestBody TeamDTO teamDTO){
        return teamService.changeTeam(teamDTO);
    }

    @PutMapping("/{teamId}")
    public TeamWithNameDTO deletePokemonFromTeam(@PathVariable Long teamId, @RequestBody PokemonDTO pokemonName) {
        System.out.println("\nteam is: " + teamId);
        System.out.println("\npokemon is" + pokemonName.getPokemonName());
        return teamService.deletePokemonFromTeam(teamId, pokemonName.getPokemonName());
    }


}
