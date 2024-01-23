import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detailArticle } from 'src/app/models/typeArticle';
import { team } from 'src/app/models/typeStanding';
import { division } from 'src/app/models/typeTeams';
import { ApiService } from 'src/app/services/api.service';
import { GetApiServiceProfilo } from 'src/app/services/getApiProfile.service';
import { GetApiServiceTeams } from 'src/app/services/getApiTeams.service';


@Component({
  selector: 'app-profilo-page',
  templateUrl: './profilo-page.component.html',
  styleUrls: ['./profilo-page.component.css']
})
export class ProfiloPageComponent implements OnInit {
  menuSelected: string = "profilo";
  menuPreferitiSelected: string = "squadre";
  showTeams: boolean = false;
  ripetiArray: any[] = new Array(10).fill({});
  favouriteTeams!: team[];
  totalTeamWest:number=0;
  totalTeamEast:number=0;
  favouriteArticles!: detailArticle[];

  teams: division = {
    NorthWest: [],
    SouthWest: [],
    SoutHeast: [],
    Atlantic: [],
    Central: [],
    Pacific: [],
  };

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private getApiProfile: GetApiServiceProfilo, private getApiTeams: GetApiServiceTeams) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({ ResolveTeams, ResolveFavouriteTeams, ResolveFavouriteArticle }) => {
        this.updateTeams(ResolveTeams, ResolveFavouriteTeams);
        this.favouriteArticles=ResolveFavouriteArticle;
        console.log(this.favouriteArticles);
      })
  }

  updateTeams(ResolveTeams: division, ResolveFavouriteTeams: team[]): void {
    this.totalTeamEast=0;
    this.totalTeamWest=0;
    for (let i = 0; i < ResolveTeams.NorthWest.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.NorthWest[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.NorthWest[i].favourite = true;
          this.totalTeamWest++;
        }
      }
    }
    this.teams.NorthWest = ResolveTeams.NorthWest;
    for (let i = 0; i < ResolveTeams.SouthWest.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.SouthWest[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.SouthWest[i].favourite = true;
          this.totalTeamWest++;
        }
      }
    }
    this.teams.SouthWest = ResolveTeams.SouthWest;
    for (let i = 0; i < ResolveTeams.SoutHeast.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.SoutHeast[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.SoutHeast[i].favourite = true;
          this.totalTeamEast++;
        }
      }
    }
    this.teams.SoutHeast = ResolveTeams.SoutHeast;
    for (let i = 0; i < ResolveTeams.Atlantic.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.Atlantic[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.Atlantic[i].favourite = true;
          this.totalTeamEast++;
        }
      }
    }
    this.teams.Atlantic = ResolveTeams.Atlantic;
    for (let i = 0; i < ResolveTeams.Central.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.Central[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.Central[i].favourite = true;
          this.totalTeamEast++;
        }
      }
    }
    this.teams.Central = ResolveTeams.Central;
    for (let i = 0; i < ResolveTeams.Pacific.length; i++) {
      for (let j = 0; j < ResolveFavouriteTeams.length; j++) {
        if (ResolveTeams.Pacific[i].id == ResolveFavouriteTeams[j].id) {
          ResolveTeams.Pacific[i].favourite = true;
          this.totalTeamWest++;
        }
      }
    }
    this.teams.Pacific = ResolveTeams.Pacific;
    this.favouriteTeams = ResolveFavouriteTeams;
  }

  functionChangeManu(word: string) {
    this.menuSelected = word;
  }
  functionChangeManuPreferiti(word: string) {
    this.menuPreferitiSelected = word;
  }

  isConferenceSelected: boolean = true;
  functionChangeConferenceSelected() {
    this.isConferenceSelected = !this.isConferenceSelected;
  }



  removeToken() {
    localStorage.removeItem('authToken');
    window.location.replace('/home');
  }


  aggiungiRimuoviPreferitiTeams(id: string) {
    this.apiService.AddRemoveFavouriteTeams(localStorage.getItem('authToken') as string, id + "").subscribe(
      () => { },
      (err) => {
        if (err.status >= 200 && err.status <= 299) {
          this.getApiProfile.getSearchFavouriteTeams(localStorage.getItem('authToken') as string).subscribe(
            (team) => {
              this.favouriteTeams = team;
              this.getApiTeams.getSearchTeams().subscribe(
                allTeam => {
                  this.updateTeams(allTeam, this.favouriteTeams);
                }
              )
            }
          )
        }
        console.log(err);
      }
    );
  }

  aggiungiRimuoviPreferitiArticles(id: string) {
    this.apiService.AddRemoveFavouriteArticle(localStorage.getItem('authToken') as string, id + "").subscribe(
      () => { },
      (err) => {
        if (err.status >= 200 && err.status <= 299) {
          this.getApiProfile.getSearchFavouriteArticle(localStorage.getItem('authToken') as string).subscribe(
            (article) => {
              this.favouriteArticles = article;
            }
          )
        }
        console.log(err);
      }
    );
  }

}
