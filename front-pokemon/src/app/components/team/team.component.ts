import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/models/team.model';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamList: Team[];
  teamsForm : FormGroup;

  nameInput : FormControl;
  trainerInput : FormControl;
  pokemonInput : FormControl;


  constructor(private teamService :TeamServiceService ) {
    this.teamList = [];

    this.nameInput = new FormControl('', Validators.required);
    this.trainerInput = new FormControl('', Validators.required);
    this.pokemonInput = new FormControl('', Validators.required);

    this.teamsForm = new FormGroup({
      name: this.nameInput,
      trainer_id: this.trainerInput,
      pokemon_list: this.pokemonInput
    });
   }

   onSubmit(): void {
    console.log('Team submitted');
    const team: Team = new Team(null, this.teamsForm.get("name")?.value, this.teamsForm.get("trainer_id")?.value, this.teamsForm.get("pokemon_1")?.value, this.teamsForm.get("pokemon_2")?.value, this.teamsForm.get("pokemon_3")?.value, this.teamsForm.get("pokemon_4")?.value, this.teamsForm.get("pokemon_5")?.value, this.teamsForm.get("pokemon_6")?.value);
    console.log(team);
    this.teamService.createTeam(team).subscribe(
      data => {
        console.log(data);
        this.showTeams();
      }
    );
    this.teamsForm.reset();
  }

  ngOnInit(): void {
    this.showTeams();
  }

 
  showTeams(): void {
    this.teamService.getTeams().subscribe(
      teamListBack => {
        this.teamList = teamListBack;       
      }
    );
    }
  
}
