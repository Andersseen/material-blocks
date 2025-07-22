import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cta',
  imports: [MatCard, MatIcon],
  template: `
    <div class="max-w-4xl mx-auto mt-16 sm:mt-24">
      <mat-card class="relative overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10"
        ></div>
        <div class="relative p-6 sm:p-8 lg:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p
            class="text-base sm:text-lg opacity-70 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Can't find the component you're looking for? Let us know and we'll
            add it to our growing library.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button
              mat-raised-button
              color="primary"
              class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
            >
              <mat-icon class="mr-2">add_circle</mat-icon>
              Request Component
            </button>
            <button
              mat-stroked-button
              class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
            >
              <mat-icon class="mr-2">GitHub</mat-icon>
              Contribute
            </button>
            <button
              mat-button
              class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
            >
              <mat-icon class="mr-2">help</mat-icon>
              Documentation
            </button>
          </div>
        </div>
      </mat-card>
    </div>
  `,
})
export default class CTA {}
