import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchStats } from 'src/app/models/typeMatch';

@Component({
  selector: 'app-partita-page',
  templateUrl: './partita-page.component.html',
  styleUrls: ['./partita-page.component.css']
})
export class PartitaPageComponent implements OnInit {
  quarti: number[] = [1, 2, 3, 4];
  tabsSelected: string = "statics";
  staticsToShow: number[] = [];

  matchStats!: matchStats;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(
      ({ ResolveMatchStats }) => {
        this.matchStats = ResolveMatchStats;
        for(let i=0; i<this.matchStats.awayTeam.datiArray.length-1; i++) {
          this.staticsToShow.push(i);
        } 
      })
  }

  /**
   * prendo i valori della singola partita e mi calcolo la percentuale da usare nel width nella sezione confronto. 
   * è importante specificare quale lato ti riferisci perchè viene invocata nell'HTML; per lato si intende squadra di casa o trasferta
   * @param lato1 : number
   * @param lato2 : number
   * @param whichLato : boolean
   * @returns : number --> Rtiorna il valore che corrispondera alla percentuale del width nel div in HTML
   */
  functionCalculatePercentage(lato1: number, lato2: number, whichLato: boolean): number {
    const sum = lato1 + lato2;
    const percentage1 = Math.round((lato1 / sum) * 100);
    const percentage2 = Math.round((lato2 / sum) * 100);

    return whichLato ? percentage1 : percentage2;
  }
}
