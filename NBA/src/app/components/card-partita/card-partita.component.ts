import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-partita',
  templateUrl: './card-partita.component.html',
  styleUrls: ['./card-partita.component.css']
})
export class CardPartitaComponent {
  @Input() id:number=0; 
}
