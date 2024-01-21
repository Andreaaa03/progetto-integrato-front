import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { allPlayer, matchCalendar, teamPlayer, teamStatistic } from '../models/typeSingleTeam';
import * as dayjs from 'dayjs';


@Injectable({
    providedIn: 'root',
})
export class GetApiServiceSingleTeam {
    constructor(private apiService: ApiService) { }

    getSearchSingleTeamStatistics(id: string) {
        return this.apiService.SearchSingleTeamStatistics(id).pipe(
            map((res: any) => {
                return res as teamStatistic;
            })
        )
    }
    match: matchCalendar = {
        previousMatch: [],
        nextMatch: [],
        totalMatch: [],
    }
    getSearchSingleTeamCalendar(id: string) {
        this.match.previousMatch= [];
        this.match.nextMatch= [];
        this.match.totalMatch= [];
        return this.apiService.SearchSingleTeamCalendar(id).pipe(
            map((res: any) => {
                /* chiedere a giorgio per tutte le partite */
                /* console.log(res.length); */
                let todayDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
                res.forEach((singleTeam: any) => {
                    let matchDate = dayjs(singleTeam.gameStartDate).format('DD/MM/YY').toString();
                    let matchTime = dayjs(singleTeam.gameStartDate).format('HH:mm').toString();
                    singleTeam.matchDate = matchDate;
                    singleTeam.matchTime = matchTime;
                   /*  console.log(singleTeam.gameid); */
                    this.match.totalMatch.push(singleTeam);
                    if (singleTeam.gameStartDate <= todayDate) {
                        this.match.previousMatch.unshift(singleTeam);
                    } else {
                        this.match.nextMatch.unshift(singleTeam);
                    }
                });
                return this.match as matchCalendar;
            })
        )
    }

    getSearchSingleTeamPlayer(id: string) {
        return this.apiService.SearchSingleTeamPlayer(id).pipe(
            map((res: any) => {
                res.forEach((singlePlayer: any) => {
                    singlePlayer.datiArray = Object.entries(singlePlayer.statistics).map(entry => entry);
                })
                return res as allPlayer;
            })
        )
    }
}