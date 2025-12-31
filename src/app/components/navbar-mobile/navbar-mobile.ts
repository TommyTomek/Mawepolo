import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Inject,NgZone,PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './navbar-mobile.html',
  styleUrls: ['./navbar-mobile.scss']
})
export class NavbarMobileComponent {

  currentLang: string;
  openMega: string | null = null;
  lastScroll = 0; 
  showSecondary = true; 
  scrollTimeout: any;
  isNavButtonHovered = false;
  menuOpen = false;


  constructor(
    private translate: TranslateService, 
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLang = this.translate.getCurrentLang() ?? 'en';;
    this.router.events.subscribe(() => { 
      this.openMega = null; 
    });
  }

  // Toggle between EN and IT
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
  // Toggle mega menu panels 
  toggleMenu() { 
    this.menuOpen = !this.menuOpen; 
  }
  closeMenu() { 
    this.menuOpen = false; 
  }

}