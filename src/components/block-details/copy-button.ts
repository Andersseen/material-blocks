import { Component, input, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'copy-button',
  imports: [MatIcon, MatIconButton, MatTooltip],
  template: ` <button
    matIconButton
    size="small"
    class="relative"
    [matTooltip]="tooltipText()"
    (click)="copyCode()"
  >
    <mat-icon class="!text-base">content_copy</mat-icon>
    @if (copied()) {
    <span
      class="absolute -left-16 top-1/2 -translate-y-1/2
           text-xs rounded px-2 py-1  animate-fade-out"
    >
      Copied!
    </span>
    }
  </button>`,
})
export class CopyButton {
  public tooltipText = input('');
  public content = input('');

  public copied = signal(false);

  copyCode() {
    navigator.clipboard.writeText(this.content());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1000);
  }
}
