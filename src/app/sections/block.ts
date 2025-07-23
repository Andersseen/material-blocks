import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import BlockDetails from '@components/block-details';
import { heroBlocksWithViews } from './heroes/data';
import { featureBlocksWithViews } from './features/data';

@Component({
  selector: 'page-block-details',
  imports: [BlockDetails],
  template: `<block-details [blockData]="block()" />`,
})
export default class BlockPage {
  #route = inject(ActivatedRoute);
  private parentRoute = toSignal(this.#route!.parent!.url);
  public parentPath = computed<string>(
    () => this.parentRoute()?.[0]?.path || ''
  );
  public id = input<string>();

  public block = computed(() => {
    const key = this.parentPath() as keyof typeof sectionBlocks;
    const blocks = sectionBlocks[key] ?? [];
    return blocks.find((block) => block.id === this.id());
  });
}

const sectionBlocks = {
  heroes: heroBlocksWithViews,
  features: featureBlocksWithViews,
};
