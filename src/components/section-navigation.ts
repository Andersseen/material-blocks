import { Component, inject, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import NavigationState from '@services/navigation-state';

@Component({
  selector: 'section-navigation',
  imports: [MatIcon, MatIconButton, MatTooltip, RouterLink],
  template: `
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button matIconButton routerLink="..">
          <mat-icon>arrow_back</mat-icon>
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button
          matIconButton
          matTooltip="Previous"
          (click)="navigationButton.emit('prev')"
        >
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button
          matIconButton
          matTooltip="Next"
          (click)="navigationButton.emit('next')"
        >
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export default class SectionNavigation {
  public navigationButton = output<'prev' | 'next'>();
}
