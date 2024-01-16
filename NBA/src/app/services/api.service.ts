import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    baseURL ="http://localhost:8080/";

    //classifica
    SearchStanding(){
        return this.http.get(this.baseURL + "standings/All");
    }
    
    //tutti i team
    SearchTeams(){
        return this.http.get(this.baseURL + "teams/All");
    }

    //statistiche singolo team, calendario singolo team, giocatori per team
    SearchSingleTeamStatistics(id:string){
        return this.http.get(this.baseURL + "teams/statistics?id="+ id);
    }
    SearchSingleTeamCalendar(id:string){
        return this.http.get(this.baseURL + "games/teamId?teamId="+ id);
    }
    SearchSingleTeamPlayer(id:string){
        return this.http.get(this.baseURL + "player/teamId?Id="+ id);
    }

    SearchMatch(id:string){
        return this.http.get(this.baseURL + "games/gameId?Id="+ id);
    }
    SearchMatchStats(id:string){
        return this.http.get(this.baseURL + "games/partitaStat?IdPartita="+ id);
    }
    SearchMatchDate(date:string){
        return this.http.get(this.baseURL + "games/date?date="+ date);
    }
}