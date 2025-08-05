import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hero',
  imports: [RouterModule, MatButton, MatIcon],
  template: `
    <!-- Hero Section -->
    <section class="relative   overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div class="text-center animate-fade-in">
          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Copy-Paste Ready
            <span
              class="min-h-20 block text-transparent bg-clip-text bg-gradient-to-r from-foreground/50 to-foreground"
            >
              Angular Blocks
            </span>
          </h1>
          <p
            class="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto  text-balance animation-delay-200 animate-slide-up"
          >
            Beautiful, accessible, and production-ready components built with
            Angular, Material Design, and Tailwind CSS. No more starting from
            scratch.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center animation-delay-400 animate-slide-up"
          >
            <a
              routerLink="/sections"
              mat-raised-button
              class="  hover: px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <mat-icon class="mr-2">widgets</mat-icon>
              Browse Components
            </a>
            <a
              routerLink="/docs"
              mat-stroked-button
              class="border-2 border-foreground  hover:/10 px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              <mat-icon class="mr-2">description</mat-icon>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class Hero {}
