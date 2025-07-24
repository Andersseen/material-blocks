import { Component, computed, input, model, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { ViewMode } from '@shared/interfaces';

@Component({
  selector: 'bd-header',
  imports: [MatButton, MatIconButton, MatIcon, MatTooltip],
  template: ` <div class="flex items-center justify-between mb-4">
    <div class="flex items-center rounded-lg p-1">
      <button
        [matButton]="isPreview() ? 'elevated' : 'tonal'"
        class="min-w-0 px-4 py-2 text-sm font-medium transition-colors"
        (click)="viewMode.set('code')"
      >
        <mat-icon class="text-base mr-2">code</mat-icon>
        Code
      </button>
      <button
        [matButton]="isPreview() ? 'tonal' : 'elevated'"
        class="min-w-0 px-4 py-2 text-sm font-medium"
        (click)="viewMode.set('preview')"
      >
        <mat-icon class="text-base mr-2">visibility</mat-icon>
        Preview
      </button>
    </div>

    <!-- Additional Actions -->
    @if (isPreview()) {
    <div class="flex items-center gap-2">
      <button matIconButton matTooltip="Refresh preview">
        <mat-icon class="text-base">refresh</mat-icon>
      </button>

      <button
        matIconButton
        matTooltip="Open in new tab"
        (click)="openInNewTab()"
      >
        <mat-icon class="text-base">open_in_new</mat-icon>
      </button>
    </div>
    }
  </div>`,
})
export default class BDHeader {
  public viewMode = model<ViewMode>('code');
  public isPreview = computed(() => this.viewMode() === 'preview');

  openInNewTab() {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    console.log(baseUrl);
    window.open(`${baseUrl}/examples`, '_blank');
  }
}
