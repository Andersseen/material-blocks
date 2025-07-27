import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-hero-2',
  imports: [MatButtonModule],
  template: `<section class="bg-white dark:bg-gray-900 py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Modern UI Components for Angular
          </h1>
          <p class="text-lg mb-8">
            Speed up your development with our collection of production-ready
            components built with Angular Material and Tailwind CSS.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button mat-raised-button color="primary" class="text-lg px-8 py-3">
              Start Building
            </button>
            <button mat-stroked-button class="text-lg px-8 py-3">
              Documentation
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Modern UI"
            class="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>`,
})
export default class Hero2 {}
