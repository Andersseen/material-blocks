import CDN_PUBLIC_URL from '@shared/cdn';
import {
  type BlockData,
  type BlockCard,
  type SectionData,
} from '@shared/interfaces';

const componentContent = [
  `import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-1',
  imports: [MatCard, MatIcon],
  template: \`<section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Why Choose Our Components?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built with modern best practices and designed for developer
          productivity
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
        >
          <div
            class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl">speed</mat-icon>
          </div>
          <h3 class="text-xl font-semibold mb-3">Fast Development</h3>
          <p>
            Copy and paste components to build your UI in minutes, not hours.
          </p>
        </mat-card>

        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          style="animation-delay: 0.1s;"
        >
          <div
            class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl text-green-600 dark:text-green-400"
              >devices</mat-icon
            >
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Responsive Design
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            All components are mobile-first and work perfectly on all screen
            sizes.
          </p>
        </mat-card>

        <mat-card
          class="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
          style="animation-delay: 0.2s;"
        >
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <mat-icon class="text-3xl text-purple-600 dark:text-purple-400"
              >palette</mat-icon
            >
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Customizable
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Easily customize colors, spacing, and styling to match your brand.
          </p>
        </mat-card>
      </div>
    </div>
  </section>\`,
})
export default class Features1 {}
`,
  `import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-2',
  imports: [MatCard, MatIcon],
  template: \`
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Built for Developers
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Developer-first components for speed, flexibility, and consistency
          </p>
        </div>

        <div class="grid gap-10 md:grid-cols-3">
          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
          >
            <mat-icon
              class="text-primary-600 dark:text-primary-400 text-4xl mb-4"
              >bolt</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Performance
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Lightweight components optimized for fast loading and smooth
              interactions.
            </p>
          </mat-card>

          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
            style="animation-delay: 0.1s"
          >
            <mat-icon class="text-green-600 dark:text-green-400 text-4xl mb-4"
              >build</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Flexible API
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Designed to be composable and extendable for advanced use cases.
            </p>
          </mat-card>

          <mat-card
            class="p-6 transition-shadow hover:shadow-xl duration-300 text-left animate-slide-up"
            style="animation-delay: 0.2s"
          >
            <mat-icon class="text-purple-600 dark:text-purple-400 text-4xl mb-4"
              >verified</mat-icon
            >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Accessibility
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Fully accessible out of the box, following the latest WCAG
              standards.
            </p>
          </mat-card>
        </div>
      </div>
    </section>
  \`,
})
export default class Features2 {}
`,
  `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-3',
  imports: [MatIcon],
  template: \`
    <section class="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          How It Works
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="flex flex-col items-center text-center animate-slide-up">
            <div
              class="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-primary-600 dark:text-primary-400"
                >cloud_download</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Install
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Add the package and install all dependencies easily.
            </p>
          </div>

          <div
            class="flex flex-col items-center text-center animate-slide-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-green-600 dark:text-green-400"
                >integration_instructions</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Integrate
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Use the components in your Angular templates with full Tailwind
              support.
            </p>
          </div>

          <div
            class="flex flex-col items-center text-center animate-slide-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <mat-icon class="text-3xl text-purple-600 dark:text-purple-400"
                >rocket_launch</mat-icon
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Launch
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Ship beautiful UIs faster than ever — with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  \`,
})
export default class Features3 {}
`,
  `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-features-4',
  imports: [MatIcon],
  template: \`
    <section class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="animate-slide-up">
            <mat-icon
              class="text-3xl mb-2 text-primary-600 dark:text-primary-400"
              >code</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Clean Code
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Well-structured and readable.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.1s">
            <mat-icon class="text-3xl mb-2 text-green-600 dark:text-green-400"
              >settings</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Configurable
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Options for any project scale.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.2s">
            <mat-icon class="text-3xl mb-2 text-purple-600 dark:text-purple-400"
              >grid_view</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Component Library
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Plenty of ready-to-use UI blocks.
            </p>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.3s">
            <mat-icon class="text-3xl mb-2 text-yellow-600 dark:text-yellow-400"
              >support</mat-icon
            >
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Community Support
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Active and growing user base.
            </p>
          </div>
        </div>
      </div>
    </section>
  \`,
})
export default class Features4 {}
`,
];
// Features Section
export const featureBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Feature Grid',
    description: 'Responsive grid layout showcasing key features with icons',
    previewUrl: `${CDN_PUBLIC_URL}/feature-1.webp`,
    iframeUrl: '/examples/features/1',
  },
  {
    id: '2',
    title: 'Feature Tabs',
    description: 'Interactive tabs to display different feature sets',
    previewUrl: `${CDN_PUBLIC_URL}/feature-2.webp`,
    iframeUrl: '/examples/features/2',
  },
  {
    id: '3',
    title: 'Comparison Table',
    description: 'Side-by-side feature comparison between plans',
    previewUrl: `${CDN_PUBLIC_URL}/feature-3.webp`,
    iframeUrl: '/examples/features/3',
  },
  {
    id: '4',
    title: 'Feature Carousel',
    description: 'Animated carousel to highlight product features',
    previewUrl: `${CDN_PUBLIC_URL}/feature-4.webp`,
    iframeUrl: '/examples/features/4',
  },
];

export const featuresSectionData: SectionData = {
  title: 'UI Features Collection',
  description:
    'Effective ways to showcase your product features and capabilities.',
  path: 'features',
  blocks: [...featureBlocks],
};

export const featureBlocksWithViews: BlockData[] = featureBlocks.map(
  (block, index) => {
    const codeTemplates: any = {
      '1': {
        // Feature Grid
        template: `<div class="features-grid py-16 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div *ngFor="let feature of features" class="feature-card p-6 rounded-lg">
        <div class="icon-container mb-4">
          <mat-icon class="text-4xl text-primary-600">{{ feature.icon }}</mat-icon>
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-grid',
  templateUrl: './feature-grid.component.html',
  standalone: true,
  imports: [MatIconModule, NgFor]
})
export class FeatureGridComponent {
  title = 'Our Key Features';
  features = [
    {
      icon: 'rocket_launch',
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency'
    },
    {
      icon: 'shield',
      title: 'Security First',
      description: 'Enterprise-grade protection'
    },
    {
      icon: 'settings',
      title: 'Customizable',
      description: 'Tailor to your specific needs'
    }
  ];
}`,
        styles: `.features-grid {
  .feature-card {
    @apply bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
}`,
      },
      '2': {
        // Feature Tabs
        template: `<div class="feature-tabs py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
    
    <mat-tab-group animationDuration="500ms">
      <mat-tab *ngFor="let tab of tabs" [label]="tab.label">
        <div class="grid md:grid-cols-2 gap-8 pt-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">{{ tab.title }}</h3>
            <p class="text-gray-600 mb-6">{{ tab.description }}</p>
            <ul class="space-y-3">
              <li *ngFor="let item of tab.items" class="flex items-start">
                <mat-icon class="mr-2 text-green-500">check_circle</mat-icon>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="rounded-lg overflow-hidden border">
            <img [src]="tab.image" [alt]="tab.title" class="w-full h-auto">
          </div>
        </div>
      </mat-tab>
    </mat-tab-group>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-tabs',
  templateUrl: './feature-tabs.component.html',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, NgFor]
})
export class FeatureTabsComponent {
  title = 'Explore Our Features';
  tabs = [
    {
      label: 'Analytics',
      title: 'Powerful Insights',
      description: 'Get actionable data about your business',
      items: [
        'Real-time dashboards',
        'Custom reports',
        'Data exports'
      ],
      image: '/assets/analytics-preview.jpg'
    },
    {
      label: 'Collaboration',
      title: 'Team Workflows',
      description: 'Tools to boost your team productivity',
      items: [
        'Shared workspaces',
        'Comment threads',
        'Task assignments'
      ],
      image: '/assets/collab-preview.jpg'
    }
  ];
}`,
        styles: `.feature-tabs {
  .mat-mdc-tab-body-content {
    @apply py-6;
  }
  
  .mat-mdc-tab-header {
    @apply border-b border-gray-200;
  }
}`,
      },
      '3': {
        // Comparison Table
        template: `<div class="comparison-table py-16 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
    
    <div class="overflow-x-auto">
      <table mat-table [dataSource]="plans" class="w-full">
        <!-- Feature Column -->
        <ng-container matColumnDef="feature">
          <th mat-header-cell *matHeaderCellDef>Feature</th>
          <td mat-cell *matCellDef="let element">{{ element.feature }}</td>
        </ng-container>
        
        <!-- Basic Plan Column -->
        <ng-container matColumnDef="basic">
          <th mat-header-cell *matHeaderCellDef>Basic</th>
          <td mat-cell *matCellDef="let element">
            <mat-icon *ngIf="element.basic">check_circle</mat-icon>
            <mat-icon *ngIf="!element.basic">cancel</mat-icon>
          </td>
        </ng-container>
        
        <!-- Pro Plan Column -->
        <ng-container matColumnDef="pro">
          <th mat-header-cell *matHeaderCellDef>Pro</th>
          <td mat-cell *matCellDef="let element">
            <mat-icon *ngIf="element.pro">check_circle</mat-icon>
            <mat-icon *ngIf="!element.pro">cancel</mat-icon>
          </td>
        </ng-container>
        
        <!-- Enterprise Plan Column -->
        <ng-container matColumnDef="enterprise">
          <th mat-header-cell *matHeaderCellDef>Enterprise</th>
          <td mat-cell *matCellDef="let element">
            <mat-icon *ngIf="element.enterprise">check_circle</mat-icon>
            <mat-icon *ngIf="!element.enterprise">cancel</mat-icon>
          </td>
        </ng-container>
        
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  standalone: true,
  imports: [MatTableModule, MatIconModule]
})
export class ComparisonTableComponent {
  title = 'Plan Comparison';
  displayedColumns = ['feature', 'basic', 'pro', 'enterprise'];
  plans = [
    { feature: 'Unlimited Projects', basic: true, pro: true, enterprise: true },
    { feature: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
    { feature: 'Priority Support', basic: false, pro: false, enterprise: true },
    { feature: 'Custom Integrations', basic: false, pro: true, enterprise: true }
  ];
}`,
        styles: `.comparison-table {
  .mat-mdc-table {
    @apply shadow-md;
  }
  
  .mat-mdc-header-cell {
    @apply font-bold text-lg text-center;
  }
  
  .mat-mdc-cell {
    @apply text-center;
    
    mat-icon {
      @apply text-green-500;
      
      &:not(.text-green-500) {
        @apply text-red-500;
      }
    }
  }
}`,
      },
      '4': {
        // Feature Carousel
        template: `<div class="feature-carousel py-16 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
    
    <div class="relative">
      <button matIconButton class="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <mat-icon>chevron_left</mat-icon>
      </button>
      
      <div class="overflow-hidden">
        <div #carousel class="flex transition-transform duration-300">
          <div *ngFor="let slide of slides" class="carousel-slide flex-shrink-0 w-full px-4">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-2xl font-semibold mb-4">{{ slide.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-6">{{ slide.description }}</p>
                  <button mat-raised-button color="primary">Learn More</button>
                </div>
                <div class="rounded-lg overflow-hidden">
                  <img [src]="slide.image" [alt]="slide.title" class="w-full h-auto">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button matIconButton class="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
    
    <div class="flex justify-center mt-6 gap-2">
      <button *ngFor="let _ of slides; let i = index" 
              matIconButton 
              [class.text-primary-600]="currentIndex === i"
              class="!w-2 !h-2 p-0 rounded-full">
        <mat-icon class="!text-xs">circle</mat-icon>
      </button>
    </div>
  </div>
</div>`,
        component: `import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-carousel',
  templateUrl: './feature-carousel.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgFor]
})
export class FeatureCarouselComponent {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  currentIndex = 0;
  
  title = 'Featured Capabilities';
  slides = [
    {
      title: 'Advanced Analytics',
      description: 'Gain deep insights with our powerful analytics dashboard',
      image: '/assets/analytics-feature.jpg'
    },
    {
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team in real-time',
      image: '/assets/collab-feature.jpg'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools and services',
      image: '/assets/integrations-feature.jpg'
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  private updateCarousel() {
    this.carousel.nativeElement.style.transform = 
      \`translateX(-\${this.currentIndex * 100}%)\`;
  }
}`,
        styles: `.feature-carousel {
  .carousel-slide {
    transition: opacity 0.3s ease;
  }
  
  .mat-mdc-icon-button {
    @apply bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm;
  }
}`,
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
