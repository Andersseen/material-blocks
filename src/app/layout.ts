import { Component, computed, signal } from '@angular/core';
import Footer from '@components/footer';
import Navbar from '@components/navbar';
import routesConfig from '@data/routes.json';

@Component({
  selector: 'app-layout',
  imports: [Footer, Navbar],
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
  public routesConfig = signal(routesConfig);

  public data = computed(() => ({
    routes: this.routesConfig().routes,
    metadata: this.routesConfig().metadata,
  }));
}
