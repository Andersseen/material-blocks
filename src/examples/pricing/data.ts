import {
  type BlockData,
  type BlockCard,
  SectionData,
} from '@shared/interfaces';

export const pricingBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Basic Plan',
    description: 'A perfect start for individuals and small teams.',
    previewUrl: 'https://placehold.co/600x400?text=Classic+Pricing',
    iframeUrl: '/examples/pricing/1',
  },
  {
    id: '2',
    title: 'Classic Pricing Grid',
    description: 'Three-column pricing layout with clear plan comparisons.',
    previewUrl: 'https://placehold.co/600x400?text=Classic+Pricing',
    iframeUrl: '/examples/pricing/2',
  },
  {
    id: '3',
    title: 'Pricing with Highlights',
    description: 'Highlights the most popular plan using visual emphasis.',
    previewUrl: 'https://placehold.co/600x400?text=Highlighted+Plan',
    iframeUrl: '/examples/pricing/3',
  },
  {
    id: '4',
    title: 'Flexible Pricing Layout',
    description: 'Modern responsive pricing with subtle animation.',
    previewUrl: 'https://placehold.co/600x400?text=Flexible+Pricing',
    iframeUrl: '/examples/pricing/4',
  },
];

export const pricingSectionsData: SectionData = {
  title: 'UI Pricing Collection',
  description:
    'Flexible pricing UI layouts designed for conversion. Includes highlighted plans, tiered features, and responsive grids.',
  path: 'pricing',
  blocks: [...pricingBlocks],
};

export const pricingBlocksWithViews: BlockData[] = pricingBlocks.map(
  (block) => {
    const codeTemplates: any = {
      '1': {
        template: `<app-pricing-classic></app-pricing-classic>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing-classic',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-classic.component.html',
})
export class PricingClassicComponent {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '2': {
        template: `<app-pricing-classic></app-pricing-classic>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing-classic',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-classic.component.html',
})
export class PricingClassicComponent {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '3': {
        template: `<app-pricing-highlighted></app-pricing-highlighted>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing-highlighted',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-highlighted.component.html',
})
export class PricingHighlightedComponent {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '4': {
        template: `<app-pricing-flexible></app-pricing-flexible>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing-flexible',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-flexible.component.html',
})
export class PricingFlexibleComponent {}`,
        styles: `/* Tailwind is used directly in template */`,
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
          language: 'scss',
        },
      ],
    };
  }
);
