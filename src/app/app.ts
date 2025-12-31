import { Component, signal } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('frontend');
  constructor(private translate: TranslateService) {

    // Use English initially
    this.translate.use('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}

