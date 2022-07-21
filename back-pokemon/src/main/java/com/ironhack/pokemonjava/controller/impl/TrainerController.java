package com.ironhack.pokemonjava.controller.impl;

import com.ironhack.pokemonjava.controller.dto.TrainerDTO;
import com.ironhack.pokemonjava.model.Trainer;
import com.ironhack.pokemonjava.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TrainerController {

    @Autowired
    private TrainerService trainerService;


    @GetMapping("/trainers")
    @ResponseStatus(HttpStatus.OK)
    public List<Trainer> getAll() {
        return trainerService.getAllTrainers();
    }

    @GetMapping("/trainers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Trainer getTrainer(@PathVariable(name = "id") Long id){
        return trainerService.getTrainerById(id);
    }

    @PostMapping("/trainers")
    @ResponseStatus(HttpStatus.CREATED)
    public Trainer newTrainer(@RequestBody TrainerDTO trainerDTO){
        return trainerService.createTrainer(trainerDTO);
    }

    @DeleteMapping("/trainers/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public String deleteTrainer(@PathVariable(name="id") Long id){
        return trainerService.removeTrainer(id);
    }

}
