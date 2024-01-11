import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allPlayer, matchCalendar, teamPlayer, teamStatistic } from 'src/app/models/typeSingleTeam';

@Component({
  selector: 'app-squadra-detail-page',
  templateUrl: './squadra-detail-page.component.html',
  styleUrls: ['./squadra-detail-page.component.css']
})
export class SquadraDetailPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  cardToShow: number = 10;
  isSelectedTeam: boolean = false;
  selectedTeam(isSelectedTeam: boolean) {
    this.isSelectedTeam = isSelectedTeam;
  }
  showMore() {
    if (this.cardToShow < this.matchCalendar.totalMatch.length)
      this.cardToShow += 10;
  }

  teamStatistics: teamStatistic | undefined = undefined;
  matchCalendar: matchCalendar = {
    previousMatch: [],
    nextMatch: [],
    totalMatch: [],
  }
  teamsPlayer: teamPlayer | null = null;
  ripetiArray: Array<any> = [] ;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({ ResolveSingleTeamStatistics, ResolveSingleTeamCalendar, ResolveSingleTeamPlayer }) => {
        this.teamStatistics = ResolveSingleTeamStatistics;
        this.matchCalendar = ResolveSingleTeamCalendar;
        this.teamsPlayer = ResolveSingleTeamPlayer;
        console.log(this.teamsPlayer);
        this.ripetiArray=new Array(this.matchCalendar.totalMatch.length).fill(null);
      })
  }
}
