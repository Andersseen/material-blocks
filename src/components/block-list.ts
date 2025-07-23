import { Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SectionData } from '@shared/interfaces';

@Component({
  selector: 'blocks-list',
  imports: [MatCard, MatCardContent, MatIcon, MatIconButton, RouterLink],
  template: ` <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button
          mat-icon-button
          class="text-gray-600 hover:text-gray-900"
          matTooltip="Back to category"
          routerLink=".."
        >
          <mat-icon>arrow_back</mat-icon>
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button
          mat-icon-button
          class="text-gray-600 hover:text-gray-900 disabled:text-gray-300"
          matTooltip="Previous block"
        >
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button
          mat-icon-button
          class="text-gray-600 hover:text-gray-900 disabled:text-gray-300"
          matTooltip="Next block"
        >
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    </div>
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold">{{ data()?.title }}</h1>
        <p class="mt-2">
          {{ data()?.description }}
        </p>
      </div>

      <!-- Blocks Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (block of data()?.blocks; track $index) {
        <a [routerLink]="['/sections/heroes', block.id]">
          <mat-card
            class="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <!-- Preview Image -->
            <div class="h-48 relative overflow-hidden">
              <img
                [src]="block.previewUrl"
                [alt]="block.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Block Content -->
            <mat-card-content class="p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-lg">
                    {{ block.title }}
                  </h3>
                  <p class="text-sm mt-1">
                    {{ block.description }}
                  </p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </a>
        }
      </div>
    </div>`,
})
export default class BlocksList {
  public data = input<SectionData>();
}
