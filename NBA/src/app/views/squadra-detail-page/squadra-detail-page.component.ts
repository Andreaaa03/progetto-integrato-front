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
  ripetiArray = new Array(82).fill(null);
  cardToShow : number = 10;

  isSelectedTeam : boolean = true;

  selectedTeam(isSelectedTeam : boolean){
    this.isSelectedTeam = isSelectedTeam;
  }

  showMore(){
    this.cardToShow += 10;
  }
  teamStatistics:teamStatistic= {
    team: {
      id: 0,
      nbaFranchise: false,
      teamName: '',
      city: '',
      allStar: false,
      code: '',
      nickname: '',
      logo: '',
      conferenceName: '',
      divisionName: ''
    },
    season: 0,
    games: 0,
    fastBreakPoints: 0,
    pointsInPaint: 0,
    biggestLead: 0,
    secondChancePoints: 0,
    pointsOffTurnover: 0,
    points: 0,
    fgm: 0,
    fga: 0,
    fgp: 0,
    ftm: 0,
    fta: 0,
    ftp: 0,
    tpm: 0,
    tpa: 0,
    tpp: 0,
    offReb: 0,
    defReb: 0,
    totReb: 0,
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: 0,
    plusMinus: 0,
    pfouls: 0
  };
  matchCalendar:matchCalendar={
    previousMatch: [],
    nextMatch: [],
    totalMatch: [],
  }
  teamsPlayer: teamPlayer | null = null;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({ ResolveSingleTeamStatistics, ResolveSingleTeamCalendar, ResolveSingleTeamPlayer }) => {
        this.teamStatistics=ResolveSingleTeamStatistics;
        this.matchCalendar=ResolveSingleTeamCalendar;
        this.teamsPlayer=ResolveSingleTeamPlayer;
        console.log(this.teamsPlayer);
      })
  }
}
