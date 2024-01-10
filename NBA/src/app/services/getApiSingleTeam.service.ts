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
        nextMatch: []
    }
    getSearchSingleTeamCalendar(id: string) {
        return this.apiService.SearchSingleTeamCalendar(id).pipe(
            map((res: any) => {
                let todayDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
                res.forEach((singleTeam: any) => {
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
                console.log(res);
                return res as allPlayer;
            })
        )
    }
}