import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Import your shared UI components
import { HeroComponent } from '../../../components/hero/hero.component';
import { SectionComponent } from '../../../components/section/section.component';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeroComponent,
    SectionComponent,
    CtaComponent
  ],
  templateUrl: './history.html'
})
export class HistoryPage {
  background = 'assets/images/veneto-hero.jpg'; 
  title = 'Origins and Ancient History'; 
  subtitle = 'The story of Veneto begins long before the rise of its great medieval cities...';
}
