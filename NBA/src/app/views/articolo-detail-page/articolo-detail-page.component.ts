import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detailArticle } from 'src/app/models/typeArticle';

@Component({
  selector: 'app-articolo-detail-page',
  templateUrl: './articolo-detail-page.component.html',
  styleUrls: ['./articolo-detail-page.component.css']
})
export class ArticoloDetailPageComponent implements OnInit {
  CountCommentForArticle: number[]= [1,2,3,4,5];

  constructor(private activatedRoute: ActivatedRoute){}
  article!:detailArticle;
  ngOnInit(): void {
    //mi prendo i dati del singolo articolo
    this.activatedRoute.data.subscribe(
      ({ ResolveArticle }) => {
        this.article=ResolveArticle;
      })
  }
}
