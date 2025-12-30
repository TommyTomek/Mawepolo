import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getCurrentLang() ?? 'en';
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
