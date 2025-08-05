import { Component, input, model } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import { BlockView } from '@shared/interfaces';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'bd-code',
  imports: [MatTabGroup, MatTab, MatIconButton, MatIcon, MatTooltip, Highlight],
  template: ` <mat-tab-group
    [(selectedIndex)]="selectedTabIndex"
    animationDuration="200ms"
  >
    @for (view of blockViews(); track $index) {
    <mat-tab [label]="view.label">
      <!-- Code Content -->
      <div class="relative">
        <div class="absolute top-3 right-3 z-10">
          <button
            matIconButton
            size="small"
            class="!text-muted-foreground hover:!text-foreground !bg-background/80 backdrop-blur-sm !shadow-sm"
            matTooltip="Copy"
            (click)="copyCode(view.content)"
          >
            <mat-icon class="!text-base">content_copy</mat-icon>
          </button>
        </div>

        <pre
          class="bg-card text-card-foreground p-4 overflow-x-auto text-sm leading-relaxed"
        >
        <code [highlight]="view.content" [language]="view.language|| 'typescript'"></code>
      </pre>
      </div>
    </mat-tab>
    }
  </mat-tab-group>`,
})
export default class BDCode {
  public blockViews = input<BlockView[]>();
  public selectedTabIndex = model(0);

  copyCode(content: string) {
    navigator.clipboard.writeText(content);
  }
}
