import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {

  private readonly BASE_URL = 'http://localhost:8080/trainers';
  constructor(private http:HttpClient) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.BASE_URL);
  }

  getTrainer(id: number) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  createTrainer(trainer: Trainer) {
    return this.http.post(this.BASE_URL, trainer);
  }

  deleteTrainer(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  
}
