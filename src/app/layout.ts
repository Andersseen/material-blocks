import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import routesConfig from '@data/routes.json';
import Footer from '@components/footer';
import ThemeState from '@services/theme';
import Navbar from '@components/navbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    Footer,
    Navbar,
  ],
  providers: [ThemeState],
  template: `
    <div class="min-h-screen transition-colors duration-300">
      <!-- Navigation -->
      <app-navbar
        [routes]="data().routes"
        [projectName]="data().metadata.projectName"
      />
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8">
        <ng-content />
      </main>

      <!-- Footer -->
      <app-footer />
    </div>
  `,
})
export default class Layout {
  #themeService = inject(ThemeState);

  public routesConfig = signal(routesConfig);

  public data = computed(() => ({
    routes: this.routesConfig().routes,
    metadata: this.routesConfig().metadata,
  }));

  constructor() {
    this.#themeService.initializeTheme();
  }
}
