import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  setCountryCode(countryCode: string) {
    localStorage.setItem('countryCode', countryCode);
  }

  getCountryCode() {
    return localStorage.getItem('countryCode');

  }
  getSources(category: string, countryCode: string) {
    // to get the sources
    let url = 'https://newsapi.org/v2/sources?country=' + countryCode + 
    '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
    if(category !== 'all') {
      url = 'https://newsapi.org/v2/sources?country=' + countryCode + '&category='
      + category + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
    }
 
    return this.http.get<object>(url);
  }

  getHeadlines(source: string, category: string, countryCode: string) {
     let url = '';

      if(source !== 'all') {
        url = 'https://newsapi.org/v2/top-headlines?country=' + countryCode + '&source=' +
        source + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
      } 
      
      if(category !== 'all') {
        url = 'https://newsapi.org/v2/top-headlines?country=' + countryCode + '&category=' +
        category + '&apiKey=6bfc63ea3b9e474385655e6c4997f9ef';
      }
    return this.http.get<object>(url);
  }
}
