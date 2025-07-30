import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'help',
  imports: [MatIcon, MatCard],
  template: `
    <mat-card class="mb-8 shadow-sm sm:w-full w-[25rem]">
      <div class="p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <mat-icon class="mr-3">help</mat-icon>
          Need Help?
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-3">Resources</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">link</mat-icon>
                <a
                  href="https://angular.dev"
                  target="_blank"
                  class="hover:underline"
                  >Angular Documentation</a
                >
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">link</mat-icon>
                <a
                  href="https://material.angular.io"
                  target="_blank"
                  class="hover:underline"
                  >Angular Material</a
                >
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">link</mat-icon>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  class="hover:underline"
                  >Tailwind CSS</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">Features</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">check</mat-icon>
                TypeScript support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">check</mat-icon>
                Accessibility (WCAG compliant)
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">check</mat-icon>
                Dark mode support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2 text-sm">check</mat-icon>
                Responsive design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </mat-card>
  `,
})
export default class Help {}
