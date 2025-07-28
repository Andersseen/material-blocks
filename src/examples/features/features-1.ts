import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-1',
  imports: [MatCard, MatIcon],
  template: `<section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Why Choose Our Components?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built with modern best practices and designed for developer
          productivity
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
        >
          <div
            class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl">speed</mat-icon>
          </div>
          <h3 class="text-xl font-semibold mb-3">Fast Development</h3>
          <p>
            Copy and paste components to build your UI in minutes, not hours.
          </p>
        </mat-card>

        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          style="animation-delay: 0.1s;"
        >
          <div
            class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl text-green-600 dark:text-green-400"
              >devices</mat-icon
            >
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Responsive Design
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            All components are mobile-first and work perfectly on all screen
            sizes.
          </p>
        </mat-card>

        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          style="animation-delay: 0.2s;"
        >
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl text-purple-600 dark:text-purple-400"
              >palette</mat-icon
            >
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Customizable
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Easily customize colors, spacing, and styling to match your brand.
          </p>
        </mat-card>
      </div>
    </div>
  </section>`,
})
export default class Features1 {}
