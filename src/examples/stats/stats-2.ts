import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-stats-2',
  standalone: true,
  imports: [MatIconModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <mat-icon class="mb-2 text-primary-600">group</mat-icon>
        <div class="text-3xl font-bold">10K+</div>
        <p class="text-gray-600 dark:text-gray-300">Clients</p>
      </div>
      <div>
        <mat-icon class="mb-2 text-primary-600">trending_up</mat-icon>
        <div class="text-3xl font-bold">150%</div>
        <p class="text-gray-600 dark:text-gray-300">Growth</p>
      </div>
      <div>
        <mat-icon class="mb-2 text-primary-600">public</mat-icon>
        <div class="text-3xl font-bold">30</div>
        <p class="text-gray-600 dark:text-gray-300">Countries</p>
      </div>
    </div>
  </div>
</section>`,
})
export default class Stats2 {}
