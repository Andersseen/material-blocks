import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-2',
  imports: [MatCard, MatIcon],
  template: `
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Built for Developers
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Developer-first components for speed, flexibility, and consistency
          </p>
        </div>

        <div class="grid gap-10 md:grid-cols-3">
          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
          >
            <mat-icon
              class="text-primary-600 dark:text-primary-400 text-4xl mb-4"
              >bolt</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Performance
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Lightweight components optimized for fast loading and smooth
              interactions.
            </p>
          </mat-card>

          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
            style="animation-delay: 0.1s"
          >
            <mat-icon class="text-green-600 dark:text-green-400 text-4xl mb-4"
              >build</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Flexible API
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Designed to be composable and extendable for advanced use cases.
            </p>
          </mat-card>

          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
            style="animation-delay: 0.2s"
          >
            <mat-icon class="text-purple-600 dark:text-purple-400 text-4xl mb-4"
              >verified</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Accessibility
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Fully accessible out of the box, following the latest WCAG
              standards.
            </p>
          </mat-card>
        </div>
      </div>
    </section>
  `,
})
export default class Features2 {}
