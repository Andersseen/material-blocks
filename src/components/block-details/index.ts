import {
  Component,
  computed,
  inject,
  input,
  Input,
  signal,
} from '@angular/core';
import SectionHeader from '@components/section-header';
import SectionNavigation from '@components/section-navigation';
import NavigationState from '@services/navigation-state';
import { type BlockData, type ViewMode } from '@shared/interfaces';
import BDCode from './code';
import { CopyButton } from './copy-button';
import BDFooter from './footer';
import BDHeader from './header';
import BDPreview from './preview';

@Component({
  selector: 'block-details',
  imports: [
    SectionNavigation,
    SectionHeader,
    BDHeader,
    BDCode,
    BDPreview,
    BDFooter,
    CopyButton,
  ],
  providers: [NavigationState],
  template: `
    <section>
      <!-- Navigation Header -->
      <section-navigation (navigationButton)="navigateTo($event)" />
      <!-- Header Section -->
      <section-header [data]="header()">
        <!-- Copy Button -->
        <copy-button
          tooltipText="Copy full code"
          [content]="blockData()?.content ?? ''"
        />
      </section-header>

      <!-- View Mode Toggle -->
      <bd-header [(viewMode)]="viewMode" [path]="blockData()?.iframeUrl!" />

      <!-- Content Section -->
      <div class="flex flex-col items-center">
        <div
          class="h-[50dvh] border border-border overflow-scroll rounded-lg w-96 sm:w-full"
        >
          <!-- Code View -->
          @if (!isPreview()) {
          <bd-code
            [blockViews]="blockData()?.views"
            [(selectedTabIndex)]="selectedTabIndex"
          />
          } @else {
          <!-- Preview View -->

          <bd-preview
            [showIframe]="!!blockData()?.previewUrl"
            [path]="blockData()?.iframeUrl!"
          />
          }
        </div>
      </div>

      <!-- Footer Info -->
      <bd-footer
        [show]="!isPreview()"
        [viewsLength]="blockData()!.views.length"
        [currentLanguage]="getCurrentLanguage()"
      />
    </section>
  `,
})
export default class BlockDetails {
  #navigationState = inject(NavigationState);
  public blockData = input<BlockData>();
  public path = input('');

  public header = computed(() => ({
    title: this.blockData()!.title,
    description: this.blockData()!.description,
  }));

  public selectedTabIndex = signal(0);
  @Input() totalBlocks: number = 1;

  public viewMode = signal<ViewMode>('code');
  public isPreview = computed(() => this.viewMode() === 'preview');

  // View mode methods
  setViewMode(mode: ViewMode) {
    this.viewMode.set(mode);
  }

  getCurrentLanguage(): string {
    const currentView = this.blockData()!.views[this.selectedTabIndex()];
    return currentView.language || 'typescript';
  }

  navigateTo(direction: 'prev' | 'next') {
    this.#navigationState.navigateToBlock(direction, this.path());
  }
}
