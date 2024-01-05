import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    baseURL="";

    SearchStanding(){
        return this.http.get("http://localhost:8080/standings/All");
    }
    
    SearchTeams(){
        return this.http.get("http://localhost:8080/teams/All");
    }
}