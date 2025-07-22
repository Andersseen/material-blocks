import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
  ],
  template: `
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
  `,
})
export default class Navbar {}
