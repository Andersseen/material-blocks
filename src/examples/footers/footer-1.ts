import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-footer-1',
  imports: [MatIcon],
  template: `<footer class="py-8 bg-gray-100 dark:bg-gray-900">
  <div class="container mx-auto text-center space-y-4">
    <div class="flex justify-center gap-6">
      <mat-icon>home</mat-icon>
      <mat-icon>mail</mat-icon>
      <mat-icon>favorite</mat-icon>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">&copy; 2024 Acme Inc.</p>
  </div>
</footer>`,
})
export default class Footer1 {}
