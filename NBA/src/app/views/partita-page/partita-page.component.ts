import { Component } from '@angular/core';

@Component({
  selector: 'app-partita-page',
  templateUrl: './partita-page.component.html',
  styleUrls: ['./partita-page.component.css']
})
export class PartitaPageComponent {
  quarti:number[]=[1,2,3,4];
  tabsSelected: string ="statics";
  staticsToShow: number[]=[1,2,3,4,5,6,7,7];  
  lato1=2;
  lato2=2;

  functionCalculatePercentage(lato1: number, lato2: number, whichLato: boolean): number {
  const sum = lato1 + lato2;
  const percentage1 = Math.round((lato1 / sum) * 100);
  const percentage2 = Math.round((lato2 / sum) * 100);

  console.log(percentage1, percentage2);

  return whichLato ? percentage1 : percentage2;
}
}
