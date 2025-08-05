import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-1',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      @for (product of products; track $index) {
        <mat-card class="p-4 flex flex-col animate-fade-in">
          <img [src]="product.image" [alt]="product.name" class="h-48 w-full object-cover rounded mb-4" />
          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ product.price }}</p>
          <button mat-raised-button color="primary">Add to cart</button>
        </mat-card>
      }
    </div>
  </section>
  `,
})
export default class Ecommerce1 {
  products = [
    { name: 'Product 1', price: '$29', image: 'https://placehold.co/400x300' },
    { name: 'Product 2', price: '$49', image: 'https://placehold.co/400x300' },
    { name: 'Product 3', price: '$19', image: 'https://placehold.co/400x300' },
  ];
}
