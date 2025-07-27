import { Component, computed, inject, Renderer2, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Footer from '@components/footer';
import Navbar from '@components/navbar';
import routesConfig from '@data/routes.json';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatButton,
    Footer,
    Navbar,
  ],
  template: `
    <section
      class="min-h-screen transition-colors duration-300 overflow-hidden"
    >
      <!-- Navigation -->
      <app-navbar
        class="fixed w-full z-10 shadow-sm shadow-foreground/10 bg-background/95"
        [routes]="data().routes"
        [projectName]="data().metadata.projectName"
        (hamburgerClick)="sidenav.toggle()"
      />
      <!-- Main Content -->
      <mat-sidenav-container class="main-margin-top">
        <mat-sidenav
          (closedStart)="sidenavClosed()"
          (openedStart)="sidenavOpened()"
          #sidenav
          position="end"
          mode="over"
          class="sidebar-container"
        >
          <aside class="mt-8">
            <nav class="flex flex-col gap-4">
              @for (route of data().routes; track route.path) {
              <a
                [routerLink]="route.path"
                routerLinkActive
                #rla="routerLinkActive"
              >
                <button
                  [matButton]="rla.isActive ? 'tonal' : 'elevated'"
                  (click)="sidenav.toggle()"
                  class="w-full"
                >
                  {{ route.name }}
                </button>
              </a>
              }
            </nav>
          </aside>
        </mat-sidenav>

        <mat-sidenav-content>
          <main class="container mx-auto px-4 py-8">
            <ng-content />
            <!-- Footer -->
            <app-footer />
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </section>
  `,
  styles: [
    `
      .sidebar-container {
        height: calc(100dvh - var(--mat-toolbar-standard-height));
      }
      .main-margin-top {
        margin-top: var(--mat-toolbar-standard-height);
      }
    `,
  ],
})
export default class Layout {
  #renderer = inject(Renderer2);

  public routesConfig = signal(routesConfig);

  public data = computed(() => ({
    routes: this.routesConfig().routes,
    metadata: this.routesConfig().metadata,
  }));

  sidenavClosed() {
    this.#renderer.removeClass(document.body, 'preventScrolling');
  }
  sidenavOpened() {
    this.#renderer.addClass(document.body, 'preventScrolling');
  }
}
