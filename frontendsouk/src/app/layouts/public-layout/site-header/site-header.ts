import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  // Ouverture du menu sur mobile
  protected readonly menuOpen = signal(false);

  // Jeton Angular DOCUMENT (et non le type DOM `Document`, qui n'est pas injectable)
  private readonly document = inject(DOCUMENT);
  readonly isDark = signal(false);

  constructor() {
    // Récupérer le thème précédemment choisi
    const savedTheme = this.document.defaultView?.localStorage.getItem('souk-theme');

    const dark = savedTheme === 'dark';

    this.isDark.set(dark);
    this.applyTheme(dark);
  }

  // Appelé lorsque l'utilisateur clique sur le bouton
  toggleTheme(): void {
    const dark = !this.isDark();

    this.isDark.set(dark);
    this.applyTheme(dark);

    // Conserver le choix après actualisation
    this.document.defaultView?.localStorage.setItem('souk-theme', dark ? 'dark' : 'light');
  }

  private applyTheme(dark: boolean): void {
    this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
