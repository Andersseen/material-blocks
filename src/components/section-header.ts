import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon, MatIconButton, MatTooltip, RouterLink],
  template: `
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button matIconButton matTooltip="Go back" routerLink="..">
          <mat-icon>arrow_back</mat-icon>
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button matIconButton matTooltip="Previous block">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button matIconButton matTooltip="Next block">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export default class SectionHeader {}
