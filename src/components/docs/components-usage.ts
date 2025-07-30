import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'components-usage',
  imports: [MatCard, MatIcon, MatList, MatListItem, RouterModule],
  template: `
    <mat-card class="mb-8 shadow-sm sm:w-full w-96">
      <div class="p-6">
        <!-- Header -->
        <div class="flex items-center mb-6">
          <mat-icon class="text-primary mr-3">widgets</mat-icon>
          <h2 class="text-2xl font-medium">Using Components</h2>
        </div>

        <div class="space-y-8">
          <!-- Copy & Paste Section -->
          <section>
            <h3 class="text-lg font-medium mb-4 flex items-center">
              <mat-icon class="mr-2 text-secondary">content_copy</mat-icon>
              Copy & Paste
            </h3>

            <p class="mb-4">
              All components are designed for direct integration into your
              Angular projects:
            </p>

            <mat-list class="!py-0">
              <mat-list-item class="!h-8 !min-h-8">
                <span matListItemTitle>
                  1. Browse components in the
                  <a routerLink="/sections"> Sections </a>
                  page
                </span>
              </mat-list-item>
              <mat-list-item class="!h-8 !min-h-8">
                <span matListItemTitle
                  >2. Click the copy button to copy the complete code</span
                >
              </mat-list-item>
              <mat-list-item class="!h-8 !min-h-8">
                <span matListItemTitle>3. Paste into your component file</span>
              </mat-list-item>
              <mat-list-item class="!h-8 !min-h-8">
                <span matListItemTitle
                  >4. Install any required dependencies</span
                >
              </mat-list-item>
              <mat-list-item class="!h-8 !min-h-8">
                <span matListItemTitle>5. Import necessary modules</span>
              </mat-list-item>
            </mat-list>
          </section>

          <!-- Standalone Components Section -->
          <section>
            <h3 class="text-lg font-medium mb-4 flex items-center">
              <mat-icon class="mr-2 text-secondary">code</mat-icon>
              Standalone Components
            </h3>

            <p>
              All components use Angular's standalone component API for easy
              integration.
            </p>
          </section>
        </div>
      </div>
    </mat-card>
  `,
  styles: [
    `
      .mat-mdc-list-item {
        --mdc-list-list-item-container-color: transparent;
      }
    `,
  ],
})
export class ComponentsUsage {}
