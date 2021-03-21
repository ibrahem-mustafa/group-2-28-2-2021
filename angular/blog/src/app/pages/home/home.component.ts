import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.fetchAllArticles()
  }

  get articles() {
    return this.articlesService.articles;
  }

}
