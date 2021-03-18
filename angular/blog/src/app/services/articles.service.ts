import { ARTICLE_TYPE } from './../types/article.type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient, private userService: UserService) { }
  private _articles: ARTICLE_TYPE[] = []


  baseUrl: string = 'http://localhost:3000/articles'

  fetchPublisherArticles() {
    this.http
      .get<{ articles: ARTICLE_TYPE[] }>(this.baseUrl, {
        headers: {
          authorization: this.userService.getUserToken(),
        },
      })
      .subscribe(
        (data) => this._articles = data.articles,
        (err) => console.log(err)
      );
  }

  updateArticle(article: ARTICLE_TYPE) {
    this.http.put(
      `${this.baseUrl}/${article._id}`,
      {
        title: article.title,
        content: article.content,
      },
      {
        headers: {
          authorization: this.userService.getUserToken(),
        },
      }
    ).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  get articles() {
    return this._articles.slice();
  }

  getArticleById(id: string) {
    return this._articles.find(article => article._id == id)
  }

}
