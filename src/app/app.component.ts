import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');

    this.translateService.onLangChange.subscribe((ev: LangChangeEvent) => {
      console.log('language changed', ev);
    });
  }

  onLanguageChange(lang) {
    this.translateService.use(lang);
  }

  onShowGreeting() {
    this.translateService.get('app.greeting', { name: 'Juri' }).subscribe(x => {
      alert(x);
    });

    // alternatively
    // const value = this.translateService.instant('app.greeting', { name: 'Juri' });
    // alert(value);
  }
}
