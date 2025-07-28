import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-4',
  imports: [MatIcon],
  template: `
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="animate-slide-up">
            <mat-icon
              class="text-3xl mb-2 text-primary-600 dark:text-primary-400"
              >code</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Clean Code
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Well-structured and readable.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.1s">
            <mat-icon class="text-3xl mb-2 text-green-600 dark:text-green-400"
              >settings</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Configurable
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Options for any project scale.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.2s">
            <mat-icon class="text-3xl mb-2 text-purple-600 dark:text-purple-400"
              >grid_view</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Component Library
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Plenty of ready-to-use UI blocks.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.3s">
            <mat-icon class="text-3xl mb-2 text-yellow-600 dark:text-yellow-400"
              >support</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Community Support
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Active and growing user base.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class Features4 {}
