import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-pricing1',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-lg">Choose the perfect plan for your needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          >
            <h3 class="text-2xl font-bold mb-4">Basic</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$9</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Up to 10 components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Basic support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Community access
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Get Started</button>
          </mat-card>

          <!-- Pro -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up border-2"
            style="animation-delay: 0.1s;"
          >
            <div
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span class="px-4 py-1 rounded-full text-sm font-medium"
                >Most Popular</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4">Pro</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$29</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Unlimited components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Priority support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Advanced features
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Custom themes
              </li>
            </ul>
            <button mat-raised-button class="w-full">Get Started</button>
          </mat-card>

          <!-- Enterprise -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$99</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Everything in Pro
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Dedicated support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Custom development
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                White-label license
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Contact Sales</button>
          </mat-card>
        </div>
      </div>
    </section>
  `,
})
export default class Pricing1 {}
