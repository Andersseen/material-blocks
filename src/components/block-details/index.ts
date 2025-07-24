import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import SectionNavigation from '@components/section-navigation';
import { type BlockData, type ViewMode } from '@shared/interfaces';

@Component({
  selector: 'block-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    SectionNavigation,
  ],
  templateUrl: './template.html',
})
export default class BlockDetails {
  #sanitizer = inject(DomSanitizer);
  public blockData = input<BlockData>();

  @Input() currentBlockIndex: number = 0;
  @Input() totalBlocks: number = 1;

  public selectedTabIndex = 0;
  public viewMode: ViewMode = 'code';
  public isPreviewLoading = false;

  public safeUrl = signal(
    this.#sanitizer.bypassSecurityTrustResourceUrl(`/examples`)
  );

  onPreviousBlock() {
    if (this.currentBlockIndex > 0) {
      console.log('Navigate to previous block');
    }
  }

  onNextBlock() {
    if (this.currentBlockIndex < this.totalBlocks - 1) {
      console.log('Navigate to next block');
    }
  }

  // View mode methods
  setViewMode(mode: ViewMode) {
    this.viewMode = mode;
    if (mode === 'preview') {
      this.isPreviewLoading = true;
      setTimeout(() => {
        this.isPreviewLoading = false;
      }, 1000);
    }
  }

  refreshPreview() {
    this.isPreviewLoading = true;
    setTimeout(() => {
      this.isPreviewLoading = false;
    }, 500);
  }

  openInNewTab() {
    if (this.blockData()?.previewUrl) {
      window.open('http://localhost:4200/examples', '_blank');
    }
  }

  // Your existing methods
  copyCurrentView() {
    const currentView = this.blockData()!.views[this.selectedTabIndex];
    this.copyCode(currentView.content);
  }

  copyCode(content: string) {
    navigator.clipboard.writeText(content);
  }

  getCurrentLanguage(): string {
    const currentView = this.blockData()!.views[this.selectedTabIndex];
    return currentView.language || 'typescript';
  }
}
