import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'bd-footer',
  imports: [MatIcon],
  template: ` @if (show()) {
    <div class="px-6 py-3 bg-muted/20">
      <div
        class="flex items-center justify-between text-xs text-muted-foreground"
      >
        <span
          >{{ viewsLength() }} view{{
            viewsLength() !== 1 ? 's' : ''
          }}
          available</span
        >
        <span class="flex items-center gap-1">
          <mat-icon class="!text-xs">code</mat-icon>
          {{ currentLanguage() }}
        </span>
      </div>
    </div>
    }`,
})
export default class BDFooter {
  public currentLanguage = input('');
  public viewsLength = input(0);
  public show = input(false);
}
