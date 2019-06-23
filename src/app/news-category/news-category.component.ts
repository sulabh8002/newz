import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {

  categories = [['business', 'entertainment', 'general', 'health'], ['science', 'sports', 'technology']];
  source = '';
  sourceOrCategory = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sourceOrCategory = params.get("catsrc");
    });
  }

}
