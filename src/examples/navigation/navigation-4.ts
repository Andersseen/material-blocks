import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation-4',
  imports: [MatIcon],
  template: `
    <nav
      class="flex items-center text-sm text-gray-600 dark:text-gray-300"
      aria-label="Breadcrumb"
    >
      <a class="hover:underline" href="#">Home</a>
      <mat-icon class="mx-2 text-base">chevron_right</mat-icon>
      <a class="hover:underline" href="#">Library</a>
      <mat-icon class="mx-2 text-base">chevron_right</mat-icon>
      <span class="text-gray-800 dark:text-white">Data</span>
    </nav>
  `,
})
export default class Navigation4 {}
