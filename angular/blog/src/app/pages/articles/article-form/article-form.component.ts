import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ARTICLE_TYPE, defaultArticle } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  article: ARTICLE_TYPE = defaultArticle

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.article = this.articlesService.getArticleById(id)!;
  }

  update() {
    this.articlesService.updateArticle(this.article)
  }

}
