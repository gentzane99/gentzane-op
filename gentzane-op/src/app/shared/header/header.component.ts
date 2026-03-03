import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLightTheme = false;
  isMobileMenuOpen = false;

  toggleTheme() {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const current = html.getAttribute('data-theme');

    if (current === 'light') {
      html.removeAttribute('data-theme'); // vuelve al dark (tu :root)
      localStorage.setItem('theme', 'dark');
      this.isLightTheme = false;
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      this.isLightTheme = true;
    }
  }

  ngOnInit() {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      this.isLightTheme = true;
      return;
    }

    if (saved === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      this.isLightTheme = false;
      return;
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      document.documentElement.setAttribute('data-theme', 'light');
      this.isLightTheme = true;
      return;
    }

    document.documentElement.removeAttribute('data-theme');
    this.isLightTheme = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
