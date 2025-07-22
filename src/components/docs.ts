import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-docs',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule],
  template: `
    <div class="min-h-[calc(100vh-64px)]">
      <div class="max-w-4xl mx-auto px-4 py-12">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Documentation</h1>
          <p class="text-xl">
            Everything you need to know to get started with our component
            library
          </p>
        </div>

        <!-- Quick Start -->
        <mat-card class="mb-8">
          <div class="p-8">
            <h2 class="text-2xl font-semibold mb-6 flex items-center">
              <mat-icon class="mr-3">rocket_launch</mat-icon>
              Quick Start
            </h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-3">
                  1. Install Dependencies
                </h3>
                <div class="p-4 rounded-lg overflow-x-auto">
                  <pre><code>npm install angular/material angular/cdk angular/animations
npm install tailwindcss tailwindcss/forms tailwindcss/typography</code></pre>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-3">
                  2. Configure Tailwind CSS
                </h3>
                <p class="mb-3">
                  Create or update your
                  <code class="px-2 py-1 rounded">tailwind.config.js</code>:
                </p>
                <div class="p-4 rounded-lg overflow-x-auto"></div>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-3">3. Import Styles</h3>
                <p class="mb-3">
                  Add to your
                  <code class="px-2 py-1 rounded">styles.css</code>:
                </p>
                <div class="p-4 rounded-lg overflow-x-auto"></div>
              </div>
            </div>
          </div>
        </mat-card>

        <!-- Component Usage -->
        <mat-card class="mb-8">
          <div class="p-8">
            <h2 class="text-2xl font-semibold mb-6 flex items-center">
              <mat-icon class="mr-3">widgets</mat-icon>
              Using Components
            </h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-3">Copy & Paste</h3>
                <p class="mb-4">
                  All components are designed to be copied and pasted directly
                  into your Angular project:
                </p>
                <ol class="list-decimal list-inside space-y-2">
                  <li>
                    Browse components in the
                    <a routerLink="/sections" class="hover:underline">
                      Sections
                    </a>
                    page
                  </li>
                  <li>Click the copy button to copy the complete code</li>
                  <li>Paste into your component file</li>
                  <li>Install any required dependencies</li>
                  <li>Import necessary modules</li>
                </ol>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-3">
                  Standalone Components
                </h3>
                <p>
                  All components are built as standalone components, making them
                  easy to integrate:
                </p>
                <div class="p-4 rounded-lg overflow-x-auto mt-3"></div>
              </div>
            </div>
          </div>
        </mat-card>

        <!-- Customization -->
        <mat-card class="mb-8">
          <div class="p-8">
            <h2 class="text-2xl font-semibold mb-6 flex items-center">
              <mat-icon class="mr-3">palette</mat-icon>
              Customization
            </h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-3">Theme Colors</h3>
                <p class="mb-4">
                  Components use a consistent color system that you can
                  customize in your Tailwind config:
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

        <!-- Help -->
        <mat-card>
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
      </div>
    </div>
  `,
})
export default class Docs {}
