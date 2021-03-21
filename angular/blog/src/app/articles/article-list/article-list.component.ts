import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ARTICLE_TYPE } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  @Input() articleList: ARTICLE_TYPE[] = [];
  @Input() showActions: boolean = true

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    if (this.articleList.length == 0)
      this.articlesService.fetchPublisherArticles();
  }

  get articles() {
    return this.articlesService.articles;
  }
}
