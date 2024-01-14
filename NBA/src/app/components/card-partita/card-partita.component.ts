import { Component, Input, OnInit } from '@angular/core';
import { match } from 'src/app/models/typeMatch';
import { GetApiMatch } from 'src/app/services/getApiMatch.service';

@Component({
  selector: 'app-card-partita',
  templateUrl: './card-partita.component.html',
  styleUrls: ['./card-partita.component.css']
})
export class CardPartitaComponent implements OnInit {
  constructor(private getApiService: GetApiMatch) { }
  @Input() gameId!: string;

  ngOnInit(): void {
    this.functionGetMatch(this.gameId!);
  }

  match!: match;
  functionGetMatch(id: string) {
    this?.getApiService.getSearchMatch(id).subscribe(
      (match) => {
        this.match = match;
      }
    )
  }
}
