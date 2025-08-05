import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-3',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div class="space-y-4">
        @for (item of cart; track $index) {
          <mat-card class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <img [src]="item.image" [alt]="item.name" class="w-16 h-16 rounded" />
              <div>
                <h3 class="font-medium">{{ item.name }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Qty: {{ item.qty }}</p>
              </div>
            </div>
            <div class="font-semibold">{{ item.price }}</div>
          </mat-card>
        }
        <div class="text-right text-xl font-bold mt-6">Total: {{ total }}</div>
        <button mat-raised-button color="primary" class="w-full mt-4">Checkout</button>
      </div>
    </div>
  </section>
  `,
})
export default class Ecommerce3 {
  cart = [
    { name: 'Product 1', qty: 1, price: '$29', image: 'https://placehold.co/100' },
    { name: 'Product 2', qty: 2, price: '$49', image: 'https://placehold.co/100' },
  ];
  get total() {
    return '$127';
  }
}
