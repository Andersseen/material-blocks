import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
  ],
  template: `
    <div class="min-h-screen  transition-colors duration-300">
      <!-- Navigation -->
      <mat-toolbar>
        <div
          class="max-w-7xl mx-auto w-full flex items-center justify-between px-4"
        >
          <div class="flex items-center space-x-4">
            <a routerLink="/">
              <mat-icon class="text-2xl">widgets</mat-icon>
              <span>UI Blocks</span>
            </a>

            <nav class="hidden md:flex items-center space-x-6 ml-8">
              <a routerLink="/">Home</a>
              <a routerLink="/sections">Sections</a>
              <a routerLink="/docs">Docs</a>
            </nav>
          </div>
        </div>
      </mat-toolbar>

      <!-- Main Content -->
      <main class="relative">
        <router-outlet />
      </main>

      <!-- Footer -->
      <footer class="border-t border-gray-200 dark:border-gray-700 mt-24">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <div class="text-center">
            <p class="text-gray-600 dark:text-gray-400">
              Built with ❤️ using Angular, Material Design, and Tailwind CSS
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Copy-paste ready components for modern web applications
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export default class App {}
