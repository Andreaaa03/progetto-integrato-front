import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    baseURL ="http://localhost:8080/";
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

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
        return this.http.get(this.baseURL + "player/teamId?id="+ id);
    }

    SearchMatch(id:string){
        return this.http.get(this.baseURL + "games/gameId?id="+ id);
    }
    SearchMatchStats(id:string){
        return this.http.get(this.baseURL + "games/partitaStat?idPartita="+ id);
    }
    SearchMatchDate(date:string){
        return this.http.get(this.baseURL + "games/date?date="+ date);
    }
    SearchMatchDateLast20(date:string){
        return this.http.get(this.baseURL + "games/Last20?date="+ date);
    }
    
    SendLogin(email:string, password:string){
        return this.http.post(this.baseURL + "user/signin", { email: email, passwd: password }, {headers: this.headers});
    }
    SendSignup(first_name: string, last_name: string, birthDate: string, email: string, passwd: string, numeroTelefono: string, username: string, sesso: string){
        return this.http.post(this.baseURL + "user/signup", { 
            first_name: first_name, last_name: last_name, birthDate: birthDate, email: email, passwd: passwd, numeroTelefono: numeroTelefono, username: username, sesso: sesso 
        }, {headers: this.headers});
    }
    
}