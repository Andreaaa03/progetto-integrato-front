import { Component } from '@angular/core';

@Component({
  selector: 'app-partita-page',
  templateUrl: './partita-page.component.html',
  styleUrls: ['./partita-page.component.css']
})
export class PartitaPageComponent {
  quarti:number[]=[1,2,3,4];
  tabsSelected:string="teamHome";
  staticsToShow: number[]=[1,2,3,4,5,6,7,7];
  
}
