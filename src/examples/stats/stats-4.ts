import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'example-stats-4',
  standalone: true,
  imports: [MatCardModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">4.8/5</div>
        <p class="text-gray-600 dark:text-gray-300">Average Rating</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">2M</div>
        <p class="text-gray-600 dark:text-gray-300">Downloads</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">500</div>
        <p class="text-gray-600 dark:text-gray-300">Contributors</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">8 yrs</div>
        <p class="text-gray-600 dark:text-gray-300">Experience</p>
      </mat-card>
    </div>
  </div>
</section>`,
})
export default class Stats4 {}
