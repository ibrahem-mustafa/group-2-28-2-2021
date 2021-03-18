import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE_TYPE, defaultArticle } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: ARTICLE_TYPE = defaultArticle
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArticle(id: string) {
    this.router.navigate(['dashboard', 'articles', id],)
  }

  navigateToUpdateArticleForm(id: string) {
    this.router.navigate(['dashboard', 'article', id])
  }

}
