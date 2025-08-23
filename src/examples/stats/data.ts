import CDN_PUBLIC_URL from '@shared/cdn';
import { BlockCard, BlockData, SectionData } from '@shared/interfaces';

export const statsBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Simple Stats',
    description: 'Four column layout showing key metrics',
    previewUrl: `${CDN_PUBLIC_URL}/stats-1.webp`,
    iframeUrl: '/examples/stats/1',
  },
  {
    id: '2',
    title: 'Stats with Icons',
    description: 'Metrics paired with icons in a responsive grid',
    previewUrl: `${CDN_PUBLIC_URL}/stats-2.webp`,
    iframeUrl: '/examples/stats/2',
  },
  {
    id: '3',
    title: 'Divided Grid Stats',
    description: 'Bordered grid layout for statistics',
    previewUrl: `${CDN_PUBLIC_URL}/stats-3.webp`,
    iframeUrl: '/examples/stats/3',
  },
  {
    id: '4',
    title: 'Stats Cards',
    description: 'Statistics displayed inside cards',
    previewUrl: `${CDN_PUBLIC_URL}/stats-4.webp`,
    iframeUrl: '/examples/stats/4',
  },
];

export const statsSectionData: SectionData = {
  title: 'UI Statistics Collection',
  description: 'Display key numbers and achievements with these stat blocks.',
  path: 'stats',
  blocks: [...statsBlocks],
};

export const statsBlocksWithViews: BlockData[] = statsBlocks.map((block) => {
  const codeTemplates: any = {
    '1': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold">120K</div>
        <p class="text-gray-600 dark:text-gray-300">Users</p>
      </div>
      <div>
        <div class="text-4xl font-bold">24/7</div>
        <p class="text-gray-600 dark:text-gray-300">Support</p>
      </div>
      <div>
        <div class="text-4xl font-bold">99.9%</div>
        <p class="text-gray-600 dark:text-gray-300">Uptime</p>
      </div>
      <div>
        <div class="text-4xl font-bold">500+</div>
        <p class="text-gray-600 dark:text-gray-300">Components</p>
      </div>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';

@Component({
  selector: 'example-stats-1',
  standalone: true,
  templateUrl: './stats-1.component.html',
})
export class Stats1Component {}`,
      styles: `/* Tailwind classes used directly in template */`,
    },
    '2': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <mat-icon class="mb-2 text-primary-600">group</mat-icon>
        <div class="text-3xl font-bold">10K+</div>
        <p class="text-gray-600 dark:text-gray-300">Clients</p>
      </div>
      <div>
        <mat-icon class="mb-2 text-primary-600">trending_up</mat-icon>
        <div class="text-3xl font-bold">150%</div>
        <p class="text-gray-600 dark:text-gray-300">Growth</p>
      </div>
      <div>
        <mat-icon class="mb-2 text-primary-600">public</mat-icon>
        <div class="text-3xl font-bold">30</div>
        <p class="text-gray-600 dark:text-gray-300">Countries</p>
      </div>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-stats-2',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './stats-2.component.html',
})
export class Stats2Component {}`,
      styles: `/* Tailwind classes used directly in template */`,
    },
    '3': {
      template: `<section class="py-24 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 text-center">
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">80+</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Projects</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">200K</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Downloads</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">500</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Contributors</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">8 yrs</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Experience</p>
      </div>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';

@Component({
  selector: 'example-stats-3',
  standalone: true,
  templateUrl: './stats-3.component.html',
})
export class Stats3Component {}`,
      styles: `/* Tailwind classes used directly in template */`,
    },
    '4': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">4.8/5</div>
        <p class="text-gray-600 dark:text-gray-300">Average Rating</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">2M</div>
        <p class="text-gray-600 dark:text-gray-300">Downloads</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">500</div>
        <p class="text-gray-600 dark:text-gray-300">Contributors</p>
      </mat-card>
      <mat-card class="p-6 text-center">
        <div class="text-4xl font-bold">8 yrs</div>
        <p class="text-gray-600 dark:text-gray-300">Experience</p>
      </mat-card>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'example-stats-4',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './stats-4.component.html',
})
export class Stats4Component {}`,
      styles: `/* Tailwind classes used directly in template */`,
    },
  };

  return {
    ...block,
    views: [
      {
        label: 'Template',
        content: codeTemplates[block.id].template,
        language: 'html',
      },
      {
        label: 'Component',
        content: codeTemplates[block.id].component,
        language: 'typescript',
      },
      {
        label: 'Styles',
        content: codeTemplates[block.id].styles,
        language: 'css',
      },
    ],
  } as BlockData;
});
