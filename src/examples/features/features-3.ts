import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-3',
  imports: [MatIcon],
  template: `
    <section class="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          How It Works
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="flex flex-col items-center text-center animate-slide-up">
            <div
              class="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-primary-600 dark:text-primary-400"
                >cloud_download</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Install
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Add the package and install all dependencies easily.
            </p>
          </div>

          <div
            class="flex flex-col items-center text-center animate-slide-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-green-600 dark:text-green-400"
                >integration_instructions</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Integrate
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Use the components in your Angular templates with full Tailwind
              support.
            </p>
          </div>

          <div
            class="flex flex-col items-center text-center animate-slide-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-purple-600 dark:text-purple-400"
                >rocket_launch</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Launch
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Ship beautiful UIs faster than ever — with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class Features3 {}
