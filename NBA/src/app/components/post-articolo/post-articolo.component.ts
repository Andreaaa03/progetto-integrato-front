import { Component, Input, OnInit } from '@angular/core';
import { detailArticle } from 'src/app/models/typeArticle';
import { GetApiServiceArticle } from 'src/app/services/getApiArticle.service';

@Component({
  selector: 'app-post-articolo',
  templateUrl: './post-articolo.component.html',
  styleUrls: ['./post-articolo.component.css']
})


export class PostArticoloComponent implements OnInit {
  @Input() extended: boolean = true;
  @Input() artId: string="";
  singleArticle!: detailArticle | any;
  constructor(private getApiServiceArticle: GetApiServiceArticle) { }
  ngOnInit(): void {
    this.getApiServiceArticle.getSearchSingleArticle(this.artId).subscribe(
      (art) => { 
        this.singleArticle = art;
      }
      )
  }
}
