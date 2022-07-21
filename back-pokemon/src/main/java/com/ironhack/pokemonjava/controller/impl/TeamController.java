package com.ironhack.pokemonjava.controller.impl;

import com.ironhack.pokemonjava.controller.dto.PokemonDTO;
import com.ironhack.pokemonjava.controller.dto.TeamDTO;
import com.ironhack.pokemonjava.model.Team;
import com.ironhack.pokemonjava.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/teams")
    @ResponseStatus(HttpStatus.OK)
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }

    @GetMapping("/teams/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Team getTeamById(@PathVariable(name="id") Long id){
        return teamService.getTeamById(id);
    }

    @PostMapping("/teams")
    @ResponseStatus(HttpStatus.CREATED)
    public Team createTeam(@RequestBody Team team){
        return teamService.createTeam(team);
    }




}
