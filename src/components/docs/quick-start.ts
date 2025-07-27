import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import CommandTabs from './command-tabs';

@Component({
  selector: 'quick-start',
  imports: [MatIconModule, MatCardModule, MatButtonModule, CommandTabs],
  template: `
    <mat-card class="mb-8">
      <div class="p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <mat-icon class="mr-3">rocket_launch</mat-icon>
          Quick Start
        </h2>

        <div class="space-y-6">
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Install Angular CLI globally
            </h3>

            <command-tabs [commands]="cliInstallCommands" />
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">2. Install Dependencies</h3>
            <command-tabs [commands]="dependenciesCommands" />
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">3. Import Styles</h3>
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
  public cliInstallCommands = [
    { label: 'npm', code: 'npm install -g @angular/cli' },
    { label: 'yarn', code: 'yarn global add @angular/cli' },
    { label: 'pnpm', code: 'pnpm add -g @angular/cli' },
  ];

  public dependenciesCommands = [
    {
      label: 'npm',
      code: 'npm install @angular/material tailwindcss postcss autoprefixer',
    },
    {
      label: 'yarn',
      code: 'yarn add @angular/material tailwindcss postcss autoprefixer',
    },
    {
      label: 'pnpm',
      code: 'pnpm add @angular/material tailwindcss postcss autoprefixer',
    },
  ];

  public importStylesCommands = [
    { label: 'CSS', code: '@import "tailwindcss";' },
    { label: 'SCSS', code: '@use "tailwindcss";' },
  ];
}
