import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainerList: Trainer[];
  trainersForm : FormGroup;
  nameInput : FormControl;
  ageInput : FormControl;
  hobbyInput : FormControl;
  
  constructor(private trainerService: TrainerServiceService) {

    this.trainerList = [];

    this.nameInput = new FormControl('', Validators.required);
    this.ageInput = new FormControl('', Validators.required);
    this.hobbyInput = new FormControl('', Validators.required);

    this.trainersForm = new FormGroup({
      name: this.nameInput,
      age: this.ageInput,
      hobby: this.hobbyInput
    });

  }
  
 onSubmit(): void {
    console.log('Trainer submitted');
    const trainer: Trainer = new Trainer(null, this.trainersForm.get("name")?.value, this.trainersForm.get("age")?.value, this.trainersForm.get("hobby")?.value);
    console.log(trainer);
    this.trainerService.createTrainer(trainer).subscribe(
      data => {
        console.log(data);
        this.showTrainers();
      }
    );
  }

  ngOnInit(): void {
    this.showTrainers();
  }

  showTrainers(): void {
    this.trainerService.getTrainers().subscribe(
      trainerListBack => {
        this.trainerList = trainerListBack;
      }
    );
  }


}

