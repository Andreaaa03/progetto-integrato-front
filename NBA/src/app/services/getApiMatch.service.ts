import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { match, matchDate, matchStats } from '../models/typeMatch';
import * as dayjs from 'dayjs';


@Injectable({
    providedIn: 'root',
})
export class GetApiServiceMatch {
    constructor(private apiService: ApiService) { }

    getSearchMatch(id: string) {
        return this.apiService.SearchMatch(id).pipe(
            map((res: any) => {
                res[0].gameStartDate = dayjs(res[0].gameStartDate).format("YY-MM-DD HH:mm");
                return res[0] as match;
            })
        )
    }

    getSearchMatchStats(id: string) {
        return this.apiService.SearchMatchStats(id).pipe(
            map((res: any) => {
                res.calendarioDateResponse.gameStartDate = dayjs(res.calendarioDateResponse.gameStartDate).format("YY-MM-DD HH:mm");
                res.homeTeam.playersStatistics.forEach((info: any) => {
                    info.min = info.min.split(":")[2];
                })
                res.awayTeam.playersStatistics.forEach((info: any) => {
                    info.min = info.min.split(":")[2];
                })
                return res as matchStats;
            })
        )
    }
    getSearchMatchDate(date: string) {
        return this.apiService.SearchMatchDate(date).pipe(
            map((res: any) => {
                return res as matchDate;
            })
        )
    }
    mathLast20!: matchDate;
    getSearchMatchDataLast20(date: string) {
        this.mathLast20=[];
        return this.apiService.SearchMatchDateLast20(date).pipe(
            map((res: any) => {
                res.reverse().forEach((singleMatch: any) => {
                    if (this.mathLast20.length < 20) {
                        singleMatch.gameStartDate = dayjs(singleMatch.gameStartDate).format("DD-MM-YY HH:mm");
                        this.mathLast20.push(singleMatch);
                    }
                })
                return this.mathLast20 as matchDate;
            })
        )
    }
}