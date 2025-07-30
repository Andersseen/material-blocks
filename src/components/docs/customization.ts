import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'customization',
  imports: [MatIcon, MatCard],
  template: `
    <mat-card class="mb-8 shadow-sm sm:w-full w-96">
      <div class="p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <mat-icon class="mr-3">palette</mat-icon>
          Customization
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-3">Theme Colors</h3>
            <p class="mb-4">
              Components use a consistent color system that you can customize in
              your Tailwind config:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Primary</div>
                <div class="text-sm">#3B82F6</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Secondary</div>
                <div class="text-sm">#22C55E</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Accent</div>
                <div class="text-sm">#F17215</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Gray</div>
                <div class="text-sm">#6B7280</div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">Dark Mode</h3>
            <p>
              All components include dark mode support using Tailwind's
              <code class="px-2 py-1 rounded">dark:</code>
              prefix.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">Responsive Design</h3>
            <p>
              Components are built mobile-first and include responsive
              breakpoints:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Mobile</div>
                <div class="text-sm">&lt; 768px</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Tablet</div>
                <div class="text-sm">768px+</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Laptop</div>
                <div class="text-sm">1024px+</div>
              </div>
              <div class="p-3 rounded-lg text-center">
                <div class="font-semibold">Desktop</div>
                <div class="text-sm">1280px+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mat-card>
  `,
})
export default class Customization {}
