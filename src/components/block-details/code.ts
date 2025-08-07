import { Component, input, model, signal } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BlockView } from '@shared/interfaces';
import { Highlight } from 'ngx-highlightjs';
import { CopyButton } from './copy-button';

@Component({
  selector: 'bd-code',
  imports: [MatTabGroup, MatTab, Highlight, CopyButton],
  template: `
    <mat-tab-group
      [(selectedIndex)]="selectedTabIndex"
      animationDuration="200ms"
    >
      @for (view of blockViews(); track $index) {
      <mat-tab [label]="view.label">
        <!-- Code Content -->
        <div class="relative">
          <div class="absolute top-3 right-3 z-10">
            <copy-button tooltipText="Copy" [content]="view.content" />
          </div>

          <pre
            class="bg-card text-card-foreground p-4 overflow-x-auto text-sm leading-relaxed"
          >
        <code [highlight]="view.content" [language]="view.language|| 'typescript'"></code>
      </pre>
        </div>
      </mat-tab>
      }
    </mat-tab-group>
  `,
})
export default class BDCode {
  public blockViews = input<BlockView[]>();
  public selectedTabIndex = model(0);
}
