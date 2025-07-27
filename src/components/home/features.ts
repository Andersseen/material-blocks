import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'features',
  imports: [RouterModule, MatIcon],
  template: `
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
  `,
})
export default class Features {}
