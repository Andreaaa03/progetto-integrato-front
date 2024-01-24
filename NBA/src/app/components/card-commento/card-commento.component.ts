import { Component, Input, OnInit } from '@angular/core';
import { commento } from 'src/app/models/typeComment';



@Component({
  selector: 'app-card-commento',
  templateUrl: './card-commento.component.html',
  styleUrls: ['./card-commento.component.css']
})
export class CardCommentoComponent implements OnInit {
  @Input() commento!: commento;
  showResponseComment: boolean = false;
  testoCommenti: string = "Mostra Commenti";
  ngOnInit(): void {
    // console.log(this.commento);
    this.functionChangeTestoCommenti();
  }


  /**
   * cambio testo
   */
  functionChangeTestoCommenti() {
    if (this.showResponseComment) {
      this.testoCommenti = "Nascondi Commenti"
    } else {
      this.testoCommenti = "Mostra Commenti";
    }
  }
}
