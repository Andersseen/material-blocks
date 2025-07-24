import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { type BlockCard } from '@shared/interfaces';

@Component({
  selector: 'bl-card',
  imports: [MatCard, MatCardContent, RouterLink],
  template: `
    <a [routerLink]="['/sections/' + path(), block()?.id]">
      <mat-card
        class="overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Preview Image -->
        <div class="h-48 relative overflow-hidden">
          <img
            [src]="block()?.previewUrl"
            [alt]="block()?.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Block Content -->
        <mat-card-content class="p-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold text-lg">
                {{ block()?.title }}
              </h3>
              <p class="text-sm mt-1">
                {{ block()?.description }}
              </p>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </a>
  `,
})
export default class BLCard {
  public block = input<BlockCard>();
  public path = input('');
}
