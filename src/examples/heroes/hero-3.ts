import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-hero-3',
  imports: [MatButtonModule, MatIconModule],
  template: `<section class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Build Amazing Apps</h1>
      <p class="text-xl md:text-2xl mb-8">
        Create stunning user interfaces with our pre-built Angular components
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
      >
        <button mat-raised-button color="accent" class="text-lg px-8 py-3">
          Get Started
          <mat-icon class="ml-2">arrow_forward</mat-icon>
        </button>
        <button mat-stroked-button class="text-lg px-8 py-3">
          View Examples
        </button>
      </div>
    </div>
  </section>`,
})
export default class Hero3 {}
