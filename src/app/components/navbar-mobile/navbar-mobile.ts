import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Inject,NgZone,PLATFORM_ID } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    RouterLink,
    CommonModule
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
  menuIndex = 0;
  touchStartX = 0; 
  activeSubmenu: 'veneto' | 'malopolska' | null = null;

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
    this.updateScrollLock();
  }
  closeMenu() { 
    this.menuOpen = false; 
    this.updateScrollLock();
  }
  updateScrollLock() {
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

@HostListener('touchstart', ['$event'])
onTouchStart(event: TouchEvent) {
  this.touchStartX = event.touches[0].clientX;
}

@HostListener('touchend', ['$event'])
onTouchEnd(event: TouchEvent) {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchEndX - this.touchStartX;

  // Swipe left
  if (deltaX < -50 && this.menuIndex < 2) {
    this.menuIndex++;
  }

  // Swipe right
  if (deltaX > 50 && this.menuIndex > 0) {
    this.menuIndex--;
  }
}


openDiscoverVeneto() {
  this.activeSubmenu = 'veneto';
  this.menuIndex = 2;
}

openDiscoverMalopolska() {
  this.activeSubmenu = 'malopolska';
  this.menuIndex = 2;
}

backToMain() {
  this.menuIndex = 1;
  this.activeSubmenu = null;
}





}