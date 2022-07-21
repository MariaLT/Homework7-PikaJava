package com.ironhack.pokemonjava.service;

import com.ironhack.pokemonjava.controller.dto.TrainerDTO;
import com.ironhack.pokemonjava.model.Team;
import com.ironhack.pokemonjava.model.Trainer;
import com.ironhack.pokemonjava.repository.TeamRepository;
import com.ironhack.pokemonjava.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private TeamRepository teamRepository;


    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }


    public Trainer getTrainerById(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);

        if(trainer.isPresent()){
            return trainer.get();
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }

    public Trainer createTrainer(TrainerDTO trainerDTO) {
        Trainer newTrainer =  new Trainer(trainerDTO.getName(), trainerDTO.getAge(), trainerDTO.getHobby(), trainerDTO.getPhoto());
        trainerRepository.save(newTrainer);
        Team newTeam = new Team(newTrainer.getId());
        teamRepository.save(newTeam);
        return newTrainer;
    }


    public String removeTrainer(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);
        if(trainer.isPresent()){
            Optional<Team> team = teamRepository.findByTrainer(id);
            if(team.isPresent()){
                teamRepository.deleteById(team.get().getId());
                trainerRepository.deleteById(trainer.get().getId());
                return "Trainer and Team Deleted";
            }else{
                trainerRepository.deleteById(trainer.get().getId());
                return "Trainer Deleted";
            }
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }
}
