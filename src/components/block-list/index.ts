import { Component, computed, inject, input } from '@angular/core';
import SectionHeader from '@components/section-header';
import { SectionData } from '@shared/interfaces';
import SectionNavigation from '../section-navigation';
import Card from './card';
import NavigationState from '@services/navigation-state';

@Component({
  selector: 'blocks-list',
  imports: [SectionNavigation, Card, SectionHeader],
  providers: [NavigationState],
  template: `<section-navigation (navigationButton)="navigateTo($event)" />
    <!-- Header Section -->
    <section-header [data]="header()" />
    <!-- Blocks Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (block of data()?.blocks; track $index) {
      <card [path]="data()!.path" [block]="block" />
      }
    </div> `,
})
export default class BlocksList {
  #navigationState = inject(NavigationState);
  public data = input<SectionData>();
  public header = computed(() => ({
    title: this.data()!.title,
    description: this.data()!.description,
  }));

  navigateTo(direction: 'prev' | 'next') {
    this.#navigationState.navigateToSection(direction);
  }
}
