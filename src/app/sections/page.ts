import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import Card from '@components/sections/card';
import CTA from '@components/sections/cta';
import Stats from '@components/sections/stats';
import { filter } from 'rxjs/operators';
import { Section, sections } from './data';

@Component({
  selector: 'page-sections',
  imports: [CTA, Stats, Card, RouterOutlet],
  template: `
    @if (currentRoute() === '/sections') {
    <section class="min-h-screen">
      <div class="px-4 sm:px-6 lg:px-8 pb-16">
        <!-- Stats Section -->
        <app-stats
          [componentsNum]="getTotalComponents()"
          [sectionsNum]="sections.length"
        />

        <!-- Sections Grid -->
        <div class="max-w-7xl mx-auto">
          <div class="mb-8 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4">
              Browse Components by Category
            </h2>
            <p
              class="text-center text-base sm:text-lg opacity-70 max-w-2xl mx-auto"
            >
              Choose from our carefully crafted collection of UI components,
              each designed for modern web applications
            </p>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            @for (section of sections; track $index) {
            <app-card [section]="section" (click)="onSectionClick()" />
            }
          </div>
        </div>

        <!-- CTA Section -->
        <app-cta />
      </div>
    </section>
    } @else {
    <router-outlet />
    }
  `,
})
export default class SectionPage {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  public sections: Section[] = sections;
  private routerState = toSignal(
    this.#router.events.pipe(filter((event) => event instanceof NavigationEnd))
  );
  public currentRoute = computed(() => this.routerState()?.url);

  getTotalComponents(): number {
    return this.sections.reduce(
      (total, section) => total + section.componentCount,
      0
    );
  }

  onSectionClick(): void {
    this.#router.navigate(['heroes'], { relativeTo: this.#route });
  }
}
