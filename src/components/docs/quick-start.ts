import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import CommandTabs from './command-tabs';

@Component({
  selector: 'quick-start',
  imports: [MatIconModule, MatCardModule, MatButtonModule, CommandTabs],
  template: `
    <mat-card class="mb-8 shadow-sm w-96 sm:w-full ">
      <div class="p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <mat-icon class="mr-3">rocket_launch</mat-icon>
          Quick Start
        </h2>

        <div class="space-y-6">
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Choose your package manager command
            </h3>
            <command-tabs [commands]="pmCommands" />
          </div>
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Install Angular CLI globally
            </h3>
            <div class="flex justify-start">
              <pre><span>-g</span> <code>&#64;angular/cli</code></pre>
            </div>
          </div>
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Install Angular Materia
            </h3>
            <pre><code>ng add &#64;angular/materia</code></pre>
          </div>
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Install Tailwind 4 Dependencies
            </h3>

            <pre><code>tailwindcss postcss autoprefixer</code></pre>
          </div>

          <div class="flex justify-between overflow-y-hidden relative"></div>
          <div>
            <h3 class="text-lg font-semibold mb-3">
              <mat-icon class="mr-2">styles</mat-icon>Import Tailwind Styles
            </h3>
            <p class="mb-3">
              Add to your
              <code class="px-2 py-1 rounded">styles.css</code>:
            </p>
            <command-tabs [commands]="importStylesCommands" />
          </div>
        </div>
      </div>
    </mat-card>
  `,
})
export default class QuickStart {
  public pmCommands = [
    { label: 'npm', code: 'npm install' },
    { label: 'yarn', code: 'yarn add' },
    { label: 'pnpm', code: 'pnpm add' },
  ];

  public importStylesCommands = [
    { label: 'CSS', code: '@import "tailwindcss";' },
    { label: 'SCSS', code: '@use "tailwindcss";' },
  ];
}
