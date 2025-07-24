import { Component, computed, input } from '@angular/core';
import SectionHeader from '@components/section-header';
import { SectionData } from '@shared/interfaces';
import SectionNavigation from '../section-navigation';
import BLCard from './card';

@Component({
  selector: 'blocks-list',
  imports: [SectionNavigation, BLCard, SectionHeader],
  template: `<section-navigation />
    <!-- Header Section -->
    <section-header [data]="header()" />
    <!-- Blocks Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (block of data()?.blocks; track $index) {

      <bl-card [path]="data()!.path" [block]="block" />
      }
    </div> `,
})
export default class BlocksList {
  public data = input<SectionData>();
  public header = computed(() => ({
    title: this.data()!.title,
    description: this.data()!.description,
  }));
}
