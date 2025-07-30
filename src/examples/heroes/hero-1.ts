import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-hero1',
  imports: [MatButton, MatChipsModule, MatIcon],
  template: `<section class="py-32">
    <div class="container mx-auto px-4">
      <div class="grid items-center gap-8 lg:grid-cols-2">
        <div
          class="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <mat-chip
            class="!border-border !bg-background !text-foreground !font-normal"
          >
            badge
            <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_outward</mat-icon>
          </mat-chip>

          <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Blocks Built With Angular & Tailwind
          </h1>
          <p class="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            Finely crafted components built with Angular, Tailwind and Angular
            Material. Developers can use these blocks directly in their project.
          </p>
          <div
            class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <button mat-raised-button color="primary" class="w-full sm:w-auto">
              <a class="w-full">Discover all components</a>
            </button>

            <button mat-stroked-button color="primary" class="w-full sm:w-auto">
              <a class="flex items-center">
                View on GitHub
                <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_right</mat-icon>
                d
              </a>
            </button>
          </div>
        </div>
        <img
          src="https://placehold.co/600x400?text=Angular+Blocks"
          alt="Hero section demo image showing interface components"
          class="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </div>
  </section>`,
  styles: [
    `
      .container {
        max-width: 100%;
        width: 100%;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }

      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }

      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }

      @media (min-width: 1536px) {
        .container {
          max-width: 1536px;
        }
      }
    `,
  ],
})
export default class Hero1 {}
