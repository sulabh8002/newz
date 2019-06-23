import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  source = '';
  category = '';
  topHeadlines = [];
  countryCode = '';
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.source = params.get("source");
      this.category = params.get("cat");
    });
    this.countryCode = this.newsService.getCountryCode();
    this.getHeadlines(this.source, this.category, this.countryCode);
  }

  getHeadlines(source: string, category: string, countryCode: string) {
    this.newsService.getHeadlines(source, category, countryCode).subscribe(
      data => {
        let headlineRow = [];
        for (let i = 0; i < data['articles'].length; i++) {
          headlineRow.push(data['articles'][i]);
          if ((i + 1) % 4 === 0) {
            this.topHeadlines.push(headlineRow);
            headlineRow = [];
          }
        }
        console.log(this.topHeadlines);
      }
    );
  }

}
