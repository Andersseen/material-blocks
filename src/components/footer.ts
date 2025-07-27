import { Component, signal } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIcon, MatDivider],
  template: `
    <footer class="bg-background/95 border-t border-foreground/10">
      <div class="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <!-- Product -->
          <div class="col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <mat-icon>widgets</mat-icon>
              <span class="text-lg font-semibold">Material Blocks</span>
            </div>
            <p class="text-sm text-muted-foreground max-w-md">
              The ultimate collection of production-ready Angular components
              built with Material Design and Tailwind CSS.
            </p>
          </div>

          <!-- Links Sections -->
          <div>
            <h3 class="text-sm font-semibold mb-4">Components</h3>
            <ul class="space-y-2">
              <li>
                <a
                  routerLink="/components/buttons"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Buttons</a
                >
              </li>
              <li>
                <a
                  routerLink="/components/cards"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Cards</a
                >
              </li>
              <li>
                <a
                  routerLink="/components/forms"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Forms</a
                >
              </li>
              <li>
                <a
                  routerLink="/components/navigation"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Navigation</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Documentation</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Tutorials</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >Support</a
                >
              </li>
            </ul>
          </div>
        </div>

        <mat-divider class="my-8" />

        <!-- Legal & Copyright -->
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-xs text-muted-foreground">
            &copy; {{ currentYear() }} Material Blocks. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a
              href="#"
              class="text-xs text-muted-foreground hover:text-primary transition-colors"
              >Terms</a
            >
            <a
              href="#"
              class="text-xs text-muted-foreground hover:text-primary transition-colors"
              >Privacy</a
            >
            <a
              href="#"
              class="text-xs text-muted-foreground hover:text-primary transition-colors"
              >Cookies</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export default class Footer {
  public currentYear = signal(new Date().getFullYear());
}
