import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newz';
  countries = [{
    code: 'us',
    name: 'USA'
  },
  {
    code: 'in',
    name: 'India'
  },
  {
    code: 'fr',
    name: 'France'
  },
  {
    code: 'ca',
    name: 'Canada'
  }];
  selectedCountry = '';

  constructor(private newsService: NewsService) {
  }

   ngOnInit() {
     if (this.newsService.getCountryCode() == '') {
      this.newsService.setCountryCode('us');
      this.selectedCountry = 'USA';
     }
    // ----To select the country according to the code-----
     this.countries.forEach( x => {
       if(x['code'] == this.newsService.getCountryCode()) {
         this.selectedCountry = x['name'];
       }
     });
   }

   selectCountry(countryCode: string) {
      this.newsService.setCountryCode(countryCode);
      this.countries.forEach( x => {
        if(x['code'] == this.newsService.getCountryCode()) {
          this.selectedCountry = x['name'];
        }
      });
      window.location.reload();
   }
}
