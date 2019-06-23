import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  country = '';
  constructor(private http: HttpClient) { }

  setCountry(country: string) {
    this.country = country;
  }

  getSources(category: string) {
    // to get the sources
    let url = 'https://newsapi.org/v2/sources?language=en&country=' + this.country + 
    '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
    if(category !== 'all') {
      url = 'https://newsapi.org/v2/sources?language=en&country=' + this.country + '&category='
      + category + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
    }
 
    return this.http.get<object>(url);
  }

  getHeadlines(source?: string, category?: string) {
     let url = '';

      if(source !== 'all') {
        url = 'https://newsapi.org/v2/top-headlines?country=' + this.country + '&source=' +
        source + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
      } 
      
      if(category !== 'all') {
        url = 'https://newsapi.org/v2/top-headlines?country=' + this.country + '&category=' +
        category + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
      }
    return this.http.get<object>(url);
  }
}
