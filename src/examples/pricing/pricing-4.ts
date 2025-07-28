import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'example-pricing4',
  imports: [MatCard, MatButton],
  template: `
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p class="text-lg mb-12">Affordable and flexible pricing</p>

        <div
          class="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <mat-card class="w-full md:w-1/3 p-6 animate-slide-up">
            <h3 class="text-2xl font-bold mb-4">Starter</h3>
            <p class="text-3xl font-bold mb-6">$5/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ Basic features</li>
              <li>✔ Email support</li>
            </ul>
            <button mat-stroked-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-8 animate-slide-up border-2 scale-105 shadow-lg"
            style="animation-delay: 0.1s;"
          >
            <h3 class="text-2xl font-bold mb-4">Professional</h3>
            <p class="text-3xl font-bold mb-6">$19/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ All Starter features</li>
              <li>✔ Collaboration tools</li>
              <li>✔ Priority support</li>
            </ul>
            <button mat-raised-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-6 animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            <h3 class="text-2xl font-bold mb-4">Agency</h3>
            <p class="text-3xl font-bold mb-6">$49/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ White-label</li>
              <li>✔ Custom features</li>
              <li>✔ Dedicated manager</li>
            </ul>
            <button mat-stroked-button class="w-full">Contact</button>
          </mat-card>
        </div>
      </div>
    </section>
  `,
})
export default class Pricing4 {}
