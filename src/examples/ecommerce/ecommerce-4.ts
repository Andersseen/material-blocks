import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'example-ecommerce-4',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
  <section class="py-20 px-4">
    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <form class="space-y-4">
        <h2 class="text-2xl font-bold mb-4">Shipping Info</h2>
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Name</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Address</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>City</mat-label>
          <input matInput />
        </mat-form-field>
      </form>
      <mat-card class="p-6">
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$127</span>
        </div>
        <div class="flex justify-between mb-4">
          <span>Shipping</span>
          <span>$10</span>
        </div>
        <div class="flex justify-between text-xl font-semibold mb-6">
          <span>Total</span>
          <span>$137</span>
        </div>
        <button mat-raised-button color="primary" class="w-full">Place Order</button>
      </mat-card>
    </div>
  </section>
  `,
})
export default class Ecommerce4 {}
