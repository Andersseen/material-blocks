import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'example-hero-4',
  imports: [MatButtonModule, MatDividerModule],
  template: `
    <section class="py-24 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <span
          class="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
        >
          New Release
        </span>

        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build
          <span>Faster</span> with Angular Components
        </h1>

        <p class="text-xl max-w-3xl mx-auto mb-8">
          Our carefully crafted components help you focus on business logic
          instead of UI boilerplate. Compatible with Angular Material and
          Tailwind CSS.
        </p>

        <mat-divider
          class="!my-8 !border-gray-200 dark:!border-gray-700 max-w-md mx-auto"
        ></mat-divider>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button mat-flat-button color="primary" class="!px-8 !py-3 !text-lg">
            <span class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Watch Demo
            </span>
          </button>

          <button
            mat-stroked-button
            class="!px-8 !py-3 !text-lg !border-gray-300 dark:!border-gray-600"
          >
            Explore Components
          </button>
        </div>
      </div>
    </section>
  `,
})
export default class Hero4 {}
