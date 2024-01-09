import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {
  @Input() extended: boolean = true;
}
