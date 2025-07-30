import {
  Component,
  computed,
  inject,
  input,
  Input,
  signal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import SectionHeader from '@components/section-header';
import SectionNavigation from '@components/section-navigation';
import { type BlockData, type ViewMode } from '@shared/interfaces';
import BDCode from './code';
import BDFooter from './footer';
import BDHeader from './header';
import BDPreview from './preview';
import NavigationState from '@services/navigation-state';

@Component({
  selector: 'block-details',
  imports: [
    MatIcon,
    SectionNavigation,
    SectionHeader,
    BDHeader,
    BDCode,
    BDPreview,
    BDFooter,
  ],
  providers: [NavigationState],
  template: `
    <section>
      <!-- Navigation Header -->
      <section-navigation (navigationButton)="navigateTo($event)" />
      <!-- Header Section -->
      <section-header [data]="header()">
        <!-- Copy Button -->
        <button
          matIconButton
          class="!text-muted-foreground hover:!text-foreground transition-colors flex-shrink-0"
          matTooltip="Copy code"
          (click)="copyCurrentView()"
        >
          <mat-icon class="!text-lg">content_copy</mat-icon>
        </button>
      </section-header>

      <!-- View Mode Toggle -->
      <bd-header [(viewMode)]="viewMode" />

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

  copyCurrentView() {
    const currentView = this.blockData()?.views[this.selectedTabIndex()];
  }

  navigateTo(direction: 'prev' | 'next') {
    console.log('here');

    this.#navigationState.navigateToBlock(direction, this.path());
  }
}
