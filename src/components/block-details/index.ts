import { Component, computed, input, Input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import SectionHeader from '@components/section-header';
import SectionNavigation from '@components/section-navigation';
import { type BlockData, type ViewMode } from '@shared/interfaces';
import BDCode from './code';
import BDHeader from './header';
import BDPreview from './preview';

@Component({
  selector: 'block-details',
  imports: [
    MatIcon,
    SectionNavigation,
    SectionHeader,
    BDHeader,
    BDCode,
    BDPreview,
  ],
  templateUrl: './template.html',
})
export default class BlockDetails {
  public blockData = input<BlockData>();

  public header = computed(() => ({
    title: this.blockData()!.title,
    description: this.blockData()!.description,
  }));

  public selectedTabIndex = signal(0);
  @Input() totalBlocks: number = 1;

  public viewMode = signal<ViewMode>('code');
  public isPreview = computed(() => this.viewMode() === 'preview');
  public isPreviewLoading = false;

  // View mode methods
  setViewMode(mode: ViewMode) {
    this.viewMode.set(mode);
  }

  refreshPreview() {
    this.isPreviewLoading = true;
  }

  getCurrentLanguage(): string {
    const currentView = this.blockData()!.views[this.selectedTabIndex()];
    return currentView.language || 'typescript';
  }

  copyCurrentView() {
    const currentView = this.blockData()?.views[this.selectedTabIndex()];
    console.log(currentView);
  }
}
