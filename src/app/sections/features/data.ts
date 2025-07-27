import { BlockCard, SectionData } from '@shared/interfaces';

// Features Section
export const featureBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Feature Grid',
    description: 'Responsive grid layout showcasing key features with icons',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Grid',
    iframeUrl: '/examples/features/1',
  },
  {
    id: '2',
    title: 'Feature Tabs',
    description: 'Interactive tabs to display different feature sets',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Tabs',
    iframeUrl: '/examples/features/2',
  },
  {
    id: '3',
    title: 'Comparison Table',
    description: 'Side-by-side feature comparison between plans',
    previewUrl: 'https://placehold.co/600x400?text=Comparison+Table',
    iframeUrl: '/examples/features/3',
  },
  {
    id: '4',
    title: 'Feature Carousel',
    description: 'Animated carousel to highlight product features',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Carousel',
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

export const featureBlocksWithViews = featureBlocks.map((block) => {
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
});

// Pricing Section
export const pricingBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Three-Tier Pricing',
    description: 'Classic pricing cards with three different plan options',
    previewUrl: 'https://placehold.co/600x400?text=Three-Tier+Pricing',
  },
  {
    id: '2',
    title: 'Toggle Pricing',
    description: 'Monthly/Annual toggle with dynamic price updates',
    previewUrl: 'https://placehold.co/600x400?text=Toggle+Pricing',
  },
  {
    id: '3',
    title: 'Enterprise Pricing',
    description: 'Custom pricing section for enterprise solutions',
    previewUrl: 'https://placehold.co/600x400?text=Enterprise+Pricing',
  },
  {
    id: '4',
    title: 'Pricing with Feature Matrix',
    description: 'Detailed pricing with feature comparison matrix',
    previewUrl: 'https://placehold.co/600x400?text=Pricing+Matrix',
  },
];

export const pricingSectionData = {
  title: 'UI Pricing Collection',
  description: 'Convert visitors with clear, attractive pricing sections.',
  blocks: [...pricingBlocks],
};
