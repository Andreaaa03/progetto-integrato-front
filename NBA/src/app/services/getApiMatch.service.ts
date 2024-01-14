import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { match } from '../models/typeMatch';


@Injectable({
    providedIn: 'root',
})
export class GetApiMatch {
    constructor(private apiService: ApiService) { }

    getSearchMatch(id: string) {
        return this.apiService.SearchMatch(id).pipe(
            map((res: any) => {
                return res[0] as match;
            })
        )
    }
}