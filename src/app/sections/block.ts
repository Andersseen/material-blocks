import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import BlockDetails from '@components/block-details';
import { featureBlocksWithViews } from '@examples/features/data';
import { heroBlocksWithViews } from '@examples/heroes/data';
import { pricingBlocksWithViews } from '@examples/pricing/data';
import { teamBlocksWithViews } from '@examples/team/data';
import { testimonialBlocksWithViews } from '@examples/testimonials/data';
import { contactBlocksWithViews } from '@examples/contact/data';
import { footerBlocksWithViews } from '@examples/footers/data';
import { navigationBlocksWithViews } from '@examples/navigation/data';

@Component({
  selector: 'page-block-details',
  imports: [BlockDetails],
  template: `<block-details [blockData]="block()" [path]="path()" />`,
})
export default class BlockPage {
  #route = inject(ActivatedRoute);
  private parentRoute = toSignal(this.#route!.parent!.url);
  public parentPath = computed<string>(
    () => this.parentRoute()?.[0]?.path || ''
  );
  public id = input<string>('');
  public path = input<string>('');

  public block = computed(() => {
    const key = this.parentPath() as keyof typeof sectionBlocks;
    const blocks = sectionBlocks[key] ?? [];
    return blocks.find((block) => block.id === this.id());
  });
}

const sectionBlocks = {
  heroes: heroBlocksWithViews,
    features: featureBlocksWithViews,
    pricing: pricingBlocksWithViews,
    testimonials: testimonialBlocksWithViews,
    team: teamBlocksWithViews,
    contact: contactBlocksWithViews,
    navigation: navigationBlocksWithViews,
    footers: footerBlocksWithViews,
  };
