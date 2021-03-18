import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ARTICLE_TYPE } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute, private articlesService: ArticlesService) { }
  id: string = ''
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
  }

  get article(): ARTICLE_TYPE {
    return this.articlesService.getArticleById(this.id)!
  }



}
