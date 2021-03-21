import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ARTICLE_TYPE, defaultArticle } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css'],
})
export class ArticleListItemComponent implements OnInit {
  @Input() showActions: boolean = true;

  @Input() article: ARTICLE_TYPE = defaultArticle;
  constructor(private router: Router, private articlesService: ArticlesService) {}

  ngOnInit(): void {}

  navigateToArticle(id: string) {
    this.router.navigate(['dashboard', 'articles', id]);
  }

  navigateToUpdateArticleForm(id: string) {
    this.router.navigate(['dashboard', 'article', id]);
  }

  deleteArticle(id: string) {
    this.articlesService.deleteArticle(id)
  }
}
