import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatButtonModule, MatIconModule, MatCardModule],
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
              class="block text-transparent bg-clip-text bg-gradient-to-r from-foreground/50 to-foreground"
            >
              Angular Components
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

    <!-- Features Section -->
    <section class="py-24 ">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold  mb-4">
            Why Choose Our Components?
          </h2>
          <p class="text-xl  max-w-3xl mx-auto">
            Built with modern best practices and designed for accessibility and
            performance
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">speed</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">Lightning Fast</h3>
            <p>
              Optimized for performance with lazy loading and minimal bundle
              size
            </p>
          </div>

          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">accessibility</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">Accessible</h3>
            <p class="">
              WCAG compliant with proper ARIA labels and keyboard navigation
            </p>
          </div>

          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">palette</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">Customizable</h3>
            <p class="">
              Easy to customize with Tailwind CSS and Angular Material theming
            </p>
          </div>

          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">code</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">TypeScript Ready</h3>
            <p class="">
              Fully typed components with excellent IDE support and autocomplete
            </p>
          </div>

          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">dark_mode</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">Dark Mode</h3>
            <p class="">
              Built-in dark mode support with smooth transitions between themes
            </p>
          </div>

          <div class="text-center group">
            <div
              class="inline-flex items-center justify-center w-16 h-16   rounded-lg mb-6 group-hover:scale-110 transition-transform"
            >
              <mat-icon class="text-2xl">content_copy</mat-icon>
            </div>
            <h3 class="text-xl font-semibold  mb-4">Copy & Paste</h3>
            <p class="">
              One-click copying of complete component code including TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preview Section -->
  `,
})
export default class Home {}
