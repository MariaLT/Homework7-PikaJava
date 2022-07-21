import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  private readonly BASE_URL = 'http://localhost:8080/teams';
  constructor(private http:HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.BASE_URL);
  }

  getTeam(id: number) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  createTeam(team: Team) {
    return this.http.post(this.BASE_URL, team);
  }

  amendTeam(team: Team) {
    return this.http.put(this.BASE_URL, team);
  }

}
