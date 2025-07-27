import { Component, computed, inject, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bd-preview',
  imports: [MatIcon],
  template: ` <div class="relative h-full">
    @if (showIframe()) {
    <iframe [src]="safeUrl()" class="w-full h-full border-0" #previewFrame>
    </iframe>
    }@else{
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <mat-icon class="text-4xl mb-2">preview</mat-icon>
        <p>No preview available for this block</p>
      </div>
    </div>
    }
  </div>`,
})
export default class BDPreview {
  #sanitizer = inject(DomSanitizer);

  public showIframe = input(false);
  public path = input('');

  public safeUrl = computed(() =>
    this.#sanitizer.bypassSecurityTrustResourceUrl(this.path())
  );
}
