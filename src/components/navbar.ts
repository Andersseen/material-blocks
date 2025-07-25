import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import ThemeState from '@services/theme';
import { Route } from '@shared/interfaces';

@Component({
  selector: 'app-navbar',

  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
  ],
  template: `
    <mat-toolbar color="dark">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="flex items-center gap-2">
          <span class="text-xl font-bold text-foreground">{{
            projectName()
          }}</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          @for (route of routes(); track route.path) {
          <a
            [routerLink]="route.path"
            [matButton]="rla.isActive ? 'tonal' : 'elevated'"
            routerLinkActive
            #rla="routerLinkActive"
            class="text-lg"
          >
            {{ route.name }}
          </a>
          }
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Toggle -->
          <button
            matIconButton
            (click)="toggleTheme()"
            class="text-foreground hover:bg-background/10"
            aria-label="Toggle theme"
          >
            <mat-icon>{{ isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>

          <!-- Mobile Menu Toggle -->
          <div class="block md:hidden">
            <button matIconButton (click)="hamburgerClick.emit()">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
})
export default class Navbar {
  #themeService = inject(ThemeState);
  // Inputs
  public projectName = input('Project Name');
  public routes = input<Route[]>([]);
  public hamburgerClick = output();

  public mobileMenuOpen = signal(false);

  // Theme state
  public isDark = this.#themeService.isDark;

  public toggleTheme() {
    this.#themeService.toggleTheme();
  }
}
