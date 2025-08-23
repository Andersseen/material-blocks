import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { type BlockCard } from '@shared/interfaces';

@Component({
  selector: 'card',
  imports: [MatCard, MatCardContent, RouterLink, NgOptimizedImage],
  template: `
    <a [routerLink]="['/sections/' + path(), block()?.id]">
      <mat-card
        class="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Preview Image -->
        <div class="h-48 relative overflow-hidden">
          <img
            [ngSrc]="block()!.previewUrl"
            fill
            loading="lazy"
            [alt]="block()?.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <!-- Block Content -->
        <mat-card-content class="p-0">
          <div
            class="relative h-20 flex flex-col items-center justify-center text-center px-4"
          >
            <!-- Title -->
            <h3
              class="font-semibold text-lg translate-y-1 scale-110 transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-100"
            >
              {{ block()?.title }}
            </h3>

            <!-- Description -->
            <p
              class="absolute top-[60%] text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              {{ block()?.description }}
            </p>
          </div>
        </mat-card-content>
      </mat-card>
    </a>
  `,
})
export default class Card {
  public block = input<BlockCard>();
  public path = input('');
}
