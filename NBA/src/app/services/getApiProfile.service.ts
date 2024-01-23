import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import * as dayjs from 'dayjs';
import { detailArticle } from '../models/typeArticle';
import { team } from '../models/typeStanding';


@Injectable({
    providedIn: 'root',
})
export class GetApiServiceProfilo {
    constructor(private apiService: ApiService) { }

    getSearchFavouriteTeams(token: string) {
        return this.apiService.SearchFavouriteTeams(token).pipe(
            map((res: any) => {
                return res.reverse() as team[];
            })
        )
    }

    getSearchFavouriteArticle(token: string) {
        return this.apiService.SearchFavouriteArticle(token).pipe(
            map((res: any) => {
                return res.reverse() as detailArticle[];
            })
        )
    }
}