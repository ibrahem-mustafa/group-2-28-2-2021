import { Component, OnInit } from '@angular/core';

type COMMENT_TYPE = {
  id: number,
  content: string,
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comments: COMMENT_TYPE[] = [
    {
      id: 1,
      content: 'Great Article'
    },
    {
      id: 2,
      content: 'Nice'
    },
    {
      id: 3,
      content: 'Trash'
    },
  ]


  show: boolean = false;

  // pending | active | removed

  articleState = 'bla'

  // toggleDetails() {
  //   this.showDetails = !this.showDetails
  // }

}
