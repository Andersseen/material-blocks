import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'example-footer-3',
  imports: [MatFormField, MatInput, MatButton],
  template: `<footer class="py-16 bg-gray-100 dark:bg-gray-800">
  <div class="container mx-auto text-center">
    <h2 class="text-2xl font-bold mb-4">Stay in touch</h2>
    <p class="text-gray-600 mb-6">Join our newsletter</p>
    <form class="max-w-md mx-auto flex gap-2">
      <mat-form-field appearance="outline" class="flex-1">
        <mat-label>Email</mat-label>
        <input matInput type="email" />
      </mat-form-field>
      <button mat-raised-button color="primary">Subscribe</button>
    </form>
    <p class="mt-8 text-sm text-gray-500">&copy; 2024 Acme Inc.</p>
  </div>
</footer>`,
})
export default class Footer3 {}
