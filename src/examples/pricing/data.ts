import CDN_PUBLIC_URL from '@shared/cdn';
import {
  type BlockData,
  type BlockCard,
  SectionData,
} from '@shared/interfaces';

const componentContent = [
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-pricing1',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-lg">Choose the perfect plan for your needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          >
            <h3 class="text-2xl font-bold mb-4">Basic</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$9</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Up to 10 components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Basic support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Community access
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Get Started</button>
          </mat-card>

          <!-- Pro -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up border-2"
            style="animation-delay: 0.1s;"
          >
            <div
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span class="px-4 py-1 rounded-full text-sm font-medium"
                >Most Popular</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4">Pro</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$29</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Unlimited components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Priority support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Advanced features
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Custom themes
              </li>
            </ul>
            <button mat-raised-button class="w-full">Get Started</button>
          </mat-card>

          <!-- Enterprise -->
          <mat-card
            class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$99</span>
              <span>/month</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Everything in Pro
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Dedicated support
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                Custom development
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon>
                White-label license
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Contact Sales</button>
          </mat-card>
        </div>
      </div>
    </section>
  \`,
})
export default class Pricing1 {}`,
  `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-pricing2',
  imports: [MatButton, MatCard, MatIcon],
  template: \`
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Pricing Made Simple</h2>
          <p class="text-lg">Switch plans any time</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Personal -->
          <mat-card class="p-8 animate-slide-up">
            <h3 class="text-2xl font-bold mb-2">Personal</h3>
            <p class="mb-6">For individuals and small projects</p>
            <div class="text-4xl font-bold mb-6">
              $12<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Basic components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Email support
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Start Free Trial</button>
          </mat-card>

          <!-- Team -->
          <mat-card class="p-8 animate-slide-up" style="animation-delay: 0.1s;">
            <h3 class="text-2xl font-bold mb-2">Team</h3>
            <p class="mb-6">Best for startups and growing teams</p>
            <div class="text-4xl font-bold mb-6">
              $49<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Everything in Personal
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Team collaboration
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Priority support
              </li>
            </ul>
            <button mat-raised-button class="w-full">Start Free Trial</button>
          </mat-card>
        </div>
      </div>
    </section>
  \`,
})
export default class Pricing2 {}`,
  `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-pricing3',
  imports: [MatIcon],
  template: \`
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Compare Plans</h2>
          <p class="text-lg">Feature breakdown by plan</p>
        </div>

        <div class="overflow-auto">
          <table class="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th class="p-4 font-semibold">Feature</th>
                <th class="p-4 font-semibold">Basic</th>
                <th class="p-4 font-semibold">Pro</th>
                <th class="p-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              @for (feature of features; track $index) {
              <tr class="border-t">
                <td class="p-4">{{ feature.name }}</td>
                <td class="p-4 text-center">
                  @if (feature.basic) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.pro) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.enterprise) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  \`,
})
export default class Pricing3 {
  features = [
    { name: 'Access to components', basic: true, pro: true, enterprise: true },
    { name: 'Support', basic: true, pro: true, enterprise: true },
    { name: 'Team management', basic: false, pro: true, enterprise: true },
    { name: 'Custom branding', basic: false, pro: false, enterprise: true },
  ];
}`,
  `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'example-pricing4',
  imports: [MatCard, MatButton],
  template: \`
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p class="text-lg mb-12">Affordable and flexible pricing</p>

        <div
          class="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <mat-card class="w-full md:w-1/3 p-6 animate-slide-up">
            <h3 class="text-2xl font-bold mb-4">Starter</h3>
            <p class="text-3xl font-bold mb-6">$5/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ Basic features</li>
              <li>✔ Email support</li>
            </ul>
            <button mat-stroked-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-8 animate-slide-up border-2 scale-105 shadow-lg"
            style="animation-delay: 0.1s;"
          >
            <h3 class="text-2xl font-bold mb-4">Professional</h3>
            <p class="text-3xl font-bold mb-6">$19/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ All Starter features</li>
              <li>✔ Collaboration tools</li>
              <li>✔ Priority support</li>
            </ul>
            <button mat-raised-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-6 animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            <h3 class="text-2xl font-bold mb-4">Agency</h3>
            <p class="text-3xl font-bold mb-6">$49/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ White-label</li>
              <li>✔ Custom features</li>
              <li>✔ Dedicated manager</li>
            </ul>
            <button mat-stroked-button class="w-full">Contact</button>
          </mat-card>
        </div>
      </div>
    </section>
  \`,
})
export default class Pricing4 {}`,
];
export const pricingBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Basic Plan',
    description: 'A perfect start for individuals and small teams.',
    previewUrl: `${CDN_PUBLIC_URL}/pricing-1.webp`,
    iframeUrl: '/examples/pricing/1',
  },
  {
    id: '2',
    title: 'Classic Pricing Grid',
    description: 'Three-column pricing layout with clear plan comparisons.',
    previewUrl: `${CDN_PUBLIC_URL}/pricing-2.webp`,
    iframeUrl: '/examples/pricing/2',
  },
  {
    id: '3',
    title: 'Pricing with Highlights',
    description: 'Highlights the most popular plan using visual emphasis.',
    previewUrl: `${CDN_PUBLIC_URL}/pricing-3.webp`,
    iframeUrl: '/examples/pricing/3',
  },
  {
    id: '4',
    title: 'Flexible Pricing Layout',
    description: 'Modern responsive pricing with subtle animation.',
    previewUrl: `${CDN_PUBLIC_URL}/pricing-4.webp`,
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
  (block, index) => {
    const codeTemplates: any = {
      '1': {
        template: `<section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-lg">Choose the perfect plan for your needs</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Basic -->
        <mat-card
          class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
        >
          <h3 class="text-2xl font-bold mb-4">Basic</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold">$9</span>
            <span>/month</span>
          </div>
          <ul class="text-left space-y-3 mb-8">
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Up to 10 components
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Basic support
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Community access
            </li>
          </ul>
          <button mat-stroked-button class="w-full">Get Started</button>
        </mat-card>

        <!-- Pro -->
        <mat-card
          class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up border-2"
          style="animation-delay: 0.1s;"
        >
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span class="px-4 py-1 rounded-full text-sm font-medium"
              >Most Popular</span
            >
          </div>
          <h3 class="text-2xl font-bold mb-4">Pro</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold">$29</span>
            <span>/month</span>
          </div>
          <ul class="text-left space-y-3 mb-8">
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Unlimited components
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Priority support
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Advanced features
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Custom themes
            </li>
          </ul>
          <button mat-raised-button class="w-full">Get Started</button>
        </mat-card>

        <!-- Enterprise -->
        <mat-card
          class="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          style="animation-delay: 0.2s;"
        >
          <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold">$99</span>
            <span>/month</span>
          </div>
          <ul class="text-left space-y-3 mb-8">
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Everything in Pro
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Dedicated support
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              Custom development
            </li>
            <li class="flex items-center">
              <mat-icon class="mr-2">check</mat-icon>
              White-label license
            </li>
          </ul>
          <button mat-stroked-button class="w-full">Contact Sales</button>
        </mat-card>
      </div>
    </div>
  </section>`,
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
        template: ` <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Pricing Made Simple</h2>
          <p class="text-lg">Switch plans any time</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Personal -->
          <mat-card class="p-8 animate-slide-up">
            <h3 class="text-2xl font-bold mb-2">Personal</h3>
            <p class="mb-6">For individuals and small projects</p>
            <div class="text-4xl font-bold mb-6">
              $12<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Basic components
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Email support
              </li>
            </ul>
            <button mat-stroked-button class="w-full">Start Free Trial</button>
          </mat-card>

          <!-- Team -->
          <mat-card class="p-8 animate-slide-up" style="animation-delay: 0.1s;">
            <h3 class="text-2xl font-bold mb-2">Team</h3>
            <p class="mb-6">Best for startups and growing teams</p>
            <div class="text-4xl font-bold mb-6">
              $49<span class="text-base font-normal">/month</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Everything in Personal
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Team collaboration
              </li>
              <li class="flex items-center">
                <mat-icon class="mr-2">check</mat-icon> Priority support
              </li>
            </ul>
            <button mat-raised-button class="w-full">Start Free Trial</button>
          </mat-card>
        </div>
      </div>
    </section>`,
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
        template: ` <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Compare Plans</h2>
          <p class="text-lg">Feature breakdown by plan</p>
        </div>

        <div class="overflow-auto">
          <table class="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th class="p-4 font-semibold">Feature</th>
                <th class="p-4 font-semibold">Basic</th>
                <th class="p-4 font-semibold">Pro</th>
                <th class="p-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              @for (feature of features; track $index) {
              <tr class="border-t">
                <td class="p-4">{{ feature.name }}</td>
                <td class="p-4 text-center">
                  @if (feature.basic) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.pro) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.enterprise) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>`,
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
        template: ` <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p class="text-lg mb-12">Affordable and flexible pricing</p>

        <div
          class="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <mat-card class="w-full md:w-1/3 p-6 animate-slide-up">
            <h3 class="text-2xl font-bold mb-4">Starter</h3>
            <p class="text-3xl font-bold mb-6">$5/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ Basic features</li>
              <li>✔ Email support</li>
            </ul>
            <button mat-stroked-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-8 animate-slide-up border-2 scale-105 shadow-lg"
            style="animation-delay: 0.1s;"
          >
            <h3 class="text-2xl font-bold mb-4">Professional</h3>
            <p class="text-3xl font-bold mb-6">$19/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ All Starter features</li>
              <li>✔ Collaboration tools</li>
              <li>✔ Priority support</li>
            </ul>
            <button mat-raised-button class="w-full">Select</button>
          </mat-card>

          <mat-card
            class="w-full md:w-1/3 p-6 animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            <h3 class="text-2xl font-bold mb-4">Agency</h3>
            <p class="text-3xl font-bold mb-6">$49/mo</p>
            <ul class="space-y-2 mb-6 text-left">
              <li>✔ White-label</li>
              <li>✔ Custom features</li>
              <li>✔ Dedicated manager</li>
            </ul>
            <button mat-stroked-button class="w-full">Contact</button>
          </mat-card>
        </div>
      </div>
    </section>`,
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
      content: componentContent[index],
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
    };
  }
);
