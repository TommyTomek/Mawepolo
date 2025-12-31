import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BREAKPOINTS } from './breakpoints';
import { NavbarDesktopComponent } from "../../components/navbar-desktop/navbar-desktop";
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    NavbarDesktopComponent,
    RouterOutlet,
    FooterComponent
]
})
export class LayoutComponent {
  isPhone = false;
  isTablet = false;
  isDesktop = false;

  constructor(private bp: BreakpointObserver) {
    this.bp.observe([
      BREAKPOINTS.phone,
      BREAKPOINTS.tablet,
      BREAKPOINTS.desktop
    ]).subscribe(result => {
      this.isPhone = result.breakpoints[BREAKPOINTS.phone];
      this.isTablet = result.breakpoints[BREAKPOINTS.tablet];
      this.isDesktop = result.breakpoints[BREAKPOINTS.desktop];
    });
    console.log('this.isPhone', this.isPhone);
    console.log('this.isTablet', this.isTablet);
    console.log('this.isDesktop', this.isDesktop);
  }
}
