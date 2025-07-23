import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { type Section } from '@shared/interfaces';

@Component({
  selector: 'app-card',
  imports: [NgClass, MatCard, MatCardContent, MatIcon, MatRipple],
  template: `
    <mat-card
      class="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform"
      matRipple
    >
      <!-- Gradient Background -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        [ngClass]="section()?.gradient"
      ></div>

      <!-- Icon Section -->
      <div class="p-4 sm:p-6 pb-2 sm:pb-3">
        <div
          class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          [ngClass]="section()?.gradient"
        >
          <mat-icon class="text-2xl sm:text-3xl text-white">
            {{ section()?.icon }}
          </mat-icon>
        </div>
      </div>

      <mat-card-content
        class="p-4 sm:p-6 pt-0 group-hover:blur-[1px] group-hover:opacity-20 transition-all duration-500"
      >
        <!-- Title and Count -->
        <div class="text-center mb-3 sm:mb-4">
          <h3
            class="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300"
          >
            {{ section()?.title }}
          </h3>
          <div class="text-xs sm:text-sm opacity-60 font-medium">
            {{ section()?.componentCount }} Components
          </div>
        </div>

        <!-- Description -->
        <p
          class="text-xs sm:text-sm opacity-80 leading-relaxed mb-4 text-center min-h-[3rem] sm:min-h-[4rem]"
        >
          {{ section()?.description }}
        </p>

        <!-- Tags -->
      </mat-card-content>

      <!-- Hover Actions -->
      <div
        class="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
      >
        <div class="flex justify-center items-center gap-2">
          <mat-icon class="mr-1 text-base">visibility</mat-icon>
          Preview
        </div>
      </div>
    </mat-card>
  `,
})
export default class Card {
  public section = input<Section>();
}
