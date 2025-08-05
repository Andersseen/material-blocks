import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-2',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
  <section class="py-20 px-4">
    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <img src="https://placehold.co/600x400" alt="Product" class="rounded-lg w-full h-auto" />
      <div>
        <h2 class="text-3xl font-bold mb-4">Premium Headphones</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">High-fidelity sound with noise cancellation.</p>
        <div class="text-2xl font-bold mb-6">$199</div>
        <button mat-raised-button color="primary" class="mr-2">Add to cart</button>
        <button mat-stroked-button>Buy Now</button>
      </div>
    </div>
  </section>
  `,
})
export default class Ecommerce2 {}
