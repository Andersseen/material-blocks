import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms3',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `<section class="py-24 bg-primary-50">
    <div class="container mx-auto px-4 max-w-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
      <p class="text-muted-foreground mb-8">Get the latest updates right in your inbox.</p>
      <form class="flex flex-col sm:flex-row gap-4 justify-center">
        <mat-form-field appearance="fill" class="flex-1">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="you@example.com" />
        </mat-form-field>
        <button mat-raised-button color="primary">Subscribe</button>
      </form>
    </div>
  </section>`,
})
export default class Forms3 {}
