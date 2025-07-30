import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

type AppSection =
  | 'heroes'
  | 'features'
  | 'pricing'
  | 'testimonials'
  | 'team'
  | 'contact';

interface SectionNavigation {
  prev?: AppSection;
  next?: AppSection;
}

@Injectable()
export default class NavigationState {
  #router = inject(Router);
  private readonly navigationMap: Record<AppSection, SectionNavigation> = {
    heroes: { next: 'features' },
    features: { prev: 'heroes', next: 'pricing' },
    pricing: { prev: 'features', next: 'testimonials' },
    testimonials: { prev: 'pricing', next: 'team' },
    team: { prev: 'testimonials', next: 'contact' },
    contact: { prev: 'testimonials' },
  };

  getCurrentSection(): AppSection | null {
    const url = this.#router.url.split('/').pop() as AppSection;
    return this.navigationMap[url] ? url : null;
  }

  getNavigationLinks(): SectionNavigation {
    const current = this.getCurrentSection();
    return current ? this.navigationMap[current] : {};
  }

  navigateTo(direction: 'prev' | 'next'): void {
    const links = this.getNavigationLinks();
    const target = links[direction];

    if (target) {
      this.#router.navigate([`sections/${target}`]);
    }
  }
}
