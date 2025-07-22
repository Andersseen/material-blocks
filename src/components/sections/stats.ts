import { Component, input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-stats',
  imports: [MatCard],
  template: `
    <div class="max-w-7xl mx-auto mb-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <mat-card
          class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-2xl sm:text-3xl font-bold mb-2">
            {{ componentsNum() }}
          </div>
          <div class="text-sm sm:text-base opacity-70">Total Components</div>
        </mat-card>
        <mat-card
          class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-2xl sm:text-3xl font-bold mb-2">
            {{ sectionsNum() }}
          </div>
          <div class="text-sm sm:text-base opacity-70">Categories</div>
        </mat-card>
        <mat-card
          class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-2xl sm:text-3xl font-bold mb-2">100%</div>
          <div class="text-sm sm:text-base opacity-70">Responsive</div>
        </mat-card>
        <mat-card
          class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-2xl sm:text-3xl font-bold mb-2">A11Y</div>
          <div class="text-sm sm:text-base opacity-70">Accessible</div>
        </mat-card>
      </div>
    </div>
  `,
})
export default class Stats {
  public componentsNum = input(10);
  public sectionsNum = input(10);
}
