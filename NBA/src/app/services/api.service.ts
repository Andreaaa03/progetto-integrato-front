import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    baseURL="";

    SearchStanding(){
        return this.http.get("./assets/json/standing.json");
    }
    
    SearchTeams(){
        return this.http.get("./assets/json/squadre.json");
    }
}