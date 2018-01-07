import { Component,Input } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://baidu.com', 10);
      new Article('FullStack', 'http://qq.com', 5);
      new Article('Angular HP', 'http://163.com', 2);
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Adding article title: ' + title.value + ' and link:' + link.value);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
}
