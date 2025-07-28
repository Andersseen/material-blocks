import { Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'command-tabs',
  imports: [MatTabGroup, MatTab, MatIcon, MatIconButton],
  template: `
    <mat-tab-group animationDuration="0ms" mat-stretch-tabs="false">
      @for (command of commands(); track $index) {
      <mat-tab [label]="command.label">
        <div class="flex justify-between overflow-y-hidden relative">
          <pre class="p-4 rounded"><code>{{command.code}}</code></pre>
          <button
            mat-icon-button
            class="absolute right-2 top-2"
            (click)="copyToClipboard(command.code)"
          >
            <mat-icon>content_copy</mat-icon>
          </button>
        </div>
      </mat-tab>
      }
    </mat-tab-group>
  `,
})
export default class CommandTabs {
  public commands = input<{ label: string; code: string }[]>([]);

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
