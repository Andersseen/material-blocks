import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-pricing2',
  imports: [MatButton, MatCard, MatIcon],
  template: `
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Pricing Made Simple</h2>
          <p class="text-lg">Switch plans any time</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Personal -->
          <mat-card class="p-8 animate-slide-up">
            <h3 class="text-2xl font-bold mb-2">Personal</h3>
            <p class="mb-6">For individuals and small projects</p>
            <div class="text-4xl font-bold mb-6">
              $12<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Basic components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Email support
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Start Free Trial</button>
          </mat-card>

          <!-- Team -->
          <mat-card class="p-8 animate-slide-up" style="animation-delay: 0.1s;">
            <h3 class="text-2xl font-bold mb-2">Team</h3>
            <p class="mb-6">Best for startups and growing teams</p>
            <div class="text-4xl font-bold mb-6">
              $49<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Everything in Personal
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Team collaboration
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Priority support
              </li>
            </ul>
            <button mat-raised-button class="w-full">Start Free Trial</button>
          </mat-card>
        </div>
      </div>
    </section>
  `,
})
export default class Pricing2 {}
