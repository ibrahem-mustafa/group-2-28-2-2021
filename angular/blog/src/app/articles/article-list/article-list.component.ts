import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.fetchPublisherArticles()
  }

  get articles() {
    return this.articlesService.articles
  }


}
