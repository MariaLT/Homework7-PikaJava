package com.ironhack.pokemonjava.service;


import com.ironhack.pokemonjava.controller.dto.TeamDTO;
import com.ironhack.pokemonjava.model.Team;
import com.ironhack.pokemonjava.model.Trainer;
import com.ironhack.pokemonjava.repository.TeamRepository;
import com.ironhack.pokemonjava.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TrainerRepository trainerRepository;


    public List<Team> getAllTeams(){
        return teamRepository.findAll();
    }

    public Team getTeamById(Long id){
        return teamRepository.findById(id).get();
    }

    public Team createTeam(Team team){
        return teamRepository.save(team);
    }


}
