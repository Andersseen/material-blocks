import { Component, inject } from '@angular/core';
import Footer from '@components/footer';
import Navbar from '@components/navbar';
import ThemeState from '@services/theme';

@Component({
  selector: 'app-layout',
  imports: [Navbar, Footer],
  providers: [ThemeState],
  template: `
    <div class="min-h-screen  transition-colors duration-300">
      <!-- Navigation -->
      <app-navbar />

      <!-- Main Content -->
      <ng-content />

      <!-- Footer -->
      <app-footer />
    </div>
  `,
})
export default class Layout {
  #themeService = inject(ThemeState);
  constructor() {
    this.#themeService.initializeTheme();
  }
}
