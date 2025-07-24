import {
  Component,
  computed,
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
import SectionHeader from '@components/section-header';
import BDHeadder from './header';

@Component({
  selector: 'block-details',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    SectionNavigation,
    SectionHeader,
    BDHeadder,
  ],
  templateUrl: './template.html',
})
export default class BlockDetails {
  #sanitizer = inject(DomSanitizer);
  public blockData = input<BlockData>();

  public header = computed(() => ({
    title: this.blockData()!.title,
    description: this.blockData()!.description,
  }));

  @Input() currentBlockIndex: number = 0;
  @Input() totalBlocks: number = 1;

  public selectedTabIndex = 0;
  public viewMode = signal<ViewMode>('preview');
  public isPreview = computed(() => this.viewMode() === 'preview');
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
    this.viewMode.set(mode);
  }

  refreshPreview() {
    this.isPreviewLoading = true;
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
