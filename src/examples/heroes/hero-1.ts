import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-hero1',
  imports: [MatButtonModule, MatChipsModule, MatIconModule],
  template: `<section class="py-32">
    <div class="container mx-auto px-4">
      <div class="grid items-center gap-8 lg:grid-cols-2">
        <div
          class="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          @if (badge) {
          <mat-chip
            class="!border-border !bg-background !text-foreground !font-normal"
          >
            {{ badge }}
            <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_outward</mat-icon>
          </mat-chip>
          }
          <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            {{ heading }}
          </h1>
          <p class="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            {{ description }}
          </p>
          <div
            class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            @if (buttons.primary) {
            <button mat-raised-button color="primary" class="w-full sm:w-auto">
              <a [href]="buttons.primary.url" class="w-full">{{
                buttons.primary.text
              }}</a>
            </button>
            } @if (buttons.secondary) {
            <button mat-stroked-button color="primary" class="w-full sm:w-auto">
              <a [href]="buttons.secondary.url" class="flex items-center">
                {{ buttons.secondary.text }}
                <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_right</mat-icon>
              </a>
            </button>
            }
          </div>
        </div>
        <img
          [src]="image.src"
          [alt]="image.alt"
          class="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </div>
  </section>`,
  styles: [
    `
      /* You can add custom styles here if needed */
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }

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
export default class Hero1 {
  @Input() badge = '✨ Your badge';
  @Input() heading = 'Blocks Built With Angular & Tailwind';
  @Input() description =
    'Finely crafted components built with Angular, Tailwind and Angular Material. Developers can use these blocks directly in their project.';
  @Input() buttons = {
    primary: {
      text: 'Discover all components',
      url: 'https://angular.io/',
    },
    secondary: {
      text: 'View on GitHub',
      url: 'https://github.com/angular',
    },
  };
  @Input() image = {
    src: 'https://placehold.co/600x400?text=Angular+Blocks',
    alt: 'Hero section demo image showing interface components',
  };
}
