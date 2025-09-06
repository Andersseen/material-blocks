import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
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
    <mat-toolbar>
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="flex items-center gap-2">
          <mat-icon>widgets</mat-icon>
          <span class="text-xl font-bold">{{ projectName() }}</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          @for (route of routes(); track route.path) {
          <a
            [routerLink]="route.path"
            [matButton]="rla.isActive ? 'tonal' : 'elevated'"
            routerLinkActive
            #rla="routerLinkActive"
          >
            {{ route.name }}
          </a>
          }
        </div>

        <div class="flex items-center gap-4">
          <!-- GitHub Button -->
          <a
            matIconButton
            href="https://github.com/Andersseen/material-blocks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            title="GitHub"
          >
            <mat-icon svgIcon="github"></mat-icon>
          </a>

          <!-- Theme Toggle -->
          <button
            mat-icon-button
            (click)="toggleTheme()"
            aria-label="Toggle theme"
          >
            <mat-icon>{{ isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>

          <!-- Mobile Menu Toggle -->
          <div class="block md:hidden">
            <button mat-icon-button (click)="hamburgerClick.emit()">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Navbar {
  #themeService = inject(ThemeState);

  constructor(reg: MatIconRegistry, sanitizer: DomSanitizer) {
    reg.addSvgIconLiteral(
      'github',
      sanitizer.bypassSecurityTrustHtml(`
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 98 96"
  fill="currentColor"
  aria-hidden="true"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69
       2.427.49 3.316-1.059 3.316-2.362 0-1.167-.041-5.052-.065-9.144-13.59
       2.957-16.453-5.924-16.453-5.924-2.209-5.63-5.39-7.138-5.39-7.138-4.402-3.012.334-2.95.334-2.95
       4.868.343 7.424 5.046 7.424 5.046 4.326 7.406 11.354 5.267 14.118 4.027.434-3.147
       1.693-5.268 3.078-6.478-10.849-1.236-22.244-5.426-22.244-24.148
       0-5.338 1.905-9.709 5.044-13.137-.506-1.243-2.187-6.231.479-12.982 0
       0 4.112-1.317 13.47 5.025a46.72 46.72 0 0 1 12.266-1.656
       c4.157.019 8.356.562 12.266 1.656 9.356-6.342 13.466-5.025
       13.466-5.025 2.67 6.75.988 11.739.482 12.982 3.144 3.428
       5.04 7.799 5.04 13.137 0 18.767-11.41 22.9-22.283 24.116
       1.741 1.51 3.292 4.485 3.292 9.04 0 6.523-.061 11.785-.061
       13.385 0 1.31.878 2.866 3.34 2.375C84.014 89.38 98
       70.966 98 49.217 98 22 76.168 0 48.854 0Z"
  />
</svg>

      `)
    );
  }

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
