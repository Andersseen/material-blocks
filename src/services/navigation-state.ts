import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

type AppSection =
  | 'heroes'
  | 'features'
  | 'pricing'
  | 'testimonials'
  | 'team'
  | 'contact'
  | 'footers'
  | 'navigation'
  | 'stats'
  | 'blog'
  | 'ecommerce'
  | 'forms';

type SectioBlock = '1' | '2' | '3' | '4';

interface SectionNavigation {
  prev?: AppSection;
  next?: AppSection;
}
interface BlockNavigation {
  prev?: SectioBlock;
  next?: SectioBlock;
}

@Injectable()
export default class NavigationState {
  #router = inject(Router);

  private readonly navigationMap: Record<AppSection, SectionNavigation> = {
    heroes: { prev: 'forms', next: 'features' },
    features: { prev: 'heroes', next: 'pricing' },
    pricing: { prev: 'features', next: 'testimonials' },
    testimonials: { prev: 'pricing', next: 'team' },
    team: { prev: 'testimonials', next: 'contact' },
    contact: { prev: 'testimonials', next: 'footers' },
    footers: { prev: 'contact', next: 'navigation' },
    navigation: { prev: 'footers', next: 'stats' },
    stats: { prev: 'navigation', next: 'blog' },
    blog: { prev: 'stats', next: 'ecommerce' },
    ecommerce: { prev: 'blog', next: 'forms' },
    forms: { prev: 'ecommerce', next: 'heroes' },
  };

  private readonly exampleBlocks: Record<SectioBlock, BlockNavigation> = {
    '1': { prev: '4', next: '2' },
    '2': { prev: '1', next: '3' },
    '3': { prev: '2', next: '4' },
    '4': { prev: '3', next: '1' },
  };

  getCurrentSection(): AppSection | null {
    const url = this.#router.url.split('/').pop() as AppSection;
    return this.navigationMap[url] ? url : null;
  }
  getCurrentBlock(): SectioBlock | null {
    const url = this.#router.url.split('/').pop() as SectioBlock;
    return this.exampleBlocks[url] ? url : null;
  }

  getNavigationLinksToSection(): SectionNavigation {
    const current = this.getCurrentSection();
    return current ? this.navigationMap[current] : {};
  }
  getNavigationLinksToBlock(): BlockNavigation {
    const current = this.getCurrentBlock();
    return current ? this.exampleBlocks[current] : {};
  }

  navigateToSection(direction: 'prev' | 'next'): void {
    const links = this.getNavigationLinksToSection();
    const target = links[direction];

    if (target) {
      this.#router.navigate([`sections/${target}`]);
    }
  }
  navigateToBlock(direction: 'prev' | 'next', category: string): void {
    const links = this.getNavigationLinksToBlock();
    const target = links[direction];

    if (target) {
      this.#router.navigate([`sections/${category}/${target}`]);
    }
  }
}
