import { type BlockData, type BlockCard } from '@shared/interfaces';
const componentContent = [
  `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-hero1',
  imports: [MatButton, MatChipsModule, MatIcon],
  template: \`<section class="py-32">
    <div class="container mx-auto px-4">
      <div class="grid items-center gap-8 lg:grid-cols-2">
        <div
          class="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <mat-chip
            class="!border-border !bg-background !text-foreground !font-normal"
          >
            badge
            <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_outward</mat-icon>
          </mat-chip>

          <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Blocks Built With Angular & Tailwind
          </h1>
          <p class="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            Finely crafted components built with Angular, Tailwind and Angular
            Material. Developers can use these blocks directly in their project.
          </p>
          <div
            class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <button mat-raised-button color="primary" class="w-full sm:w-auto">
              <a class="w-full">Discover all components</a>
            </button>

            <button mat-stroked-button color="primary" class="w-full sm:w-auto">
              <a class="flex items-center">
                View on GitHub
                <mat-icon class="!w-4 !h-4 !text-sm ml-2">arrow_right</mat-icon>
                d
              </a>
            </button>
          </div>
        </div>
        <img
          src="https://placehold.co/600x400?text=Angular+Blocks"
          alt="Hero section demo image showing interface components"
          class="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </div>
  </section>\`,
  styles: [
    \`
      .container {
        max-width: 100%;
        width: 100%;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }

      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }

      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }

      @media (min-width: 1536px) {
        .container {
          max-width: 1536px;
        }
      }
    \`,
  ],
})
export default class Hero1 {}
`,
  `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-hero-2',
  imports: [MatButtonModule],
  template: \`<section class="bg-white dark:bg-gray-900 py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Modern UI Components for Angular
          </h1>
          <p class="text-lg mb-8">
            Speed up your development with our collection of production-ready
            components built with Angular Material and Tailwind CSS.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button mat-raised-button color="primary" class="text-lg px-8 py-3">
              Start Building
            </button>
            <button mat-stroked-button class="text-lg px-8 py-3">
              Documentation
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Modern UI"
            class="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>\`,
})
export default class Hero2 {}
`,
  `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-hero-3',
  imports: [MatButtonModule, MatIconModule],
  template: \`<section class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Build Amazing Apps</h1>
      <p class="text-xl md:text-2xl mb-8">
        Create stunning user interfaces with our pre-built Angular components
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
      >
        <button mat-raised-button color="accent" class="text-lg px-8 py-3">
          Get Started
          <mat-icon class="ml-2">arrow_forward</mat-icon>
        </button>
        <button mat-stroked-button class="text-lg px-8 py-3">
          View Examples
        </button>
      </div>
    </div>
  </section>\`,
})
export default class Hero3 {}
`,
  `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'example-hero-4',
  imports: [MatButtonModule, MatDividerModule],
  template: \`
    <section class="py-24 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <span
          class="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
        >
          New Release
        </span>

        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build
          <span>Faster</span> with Angular Components
        </h1>

        <p class="text-xl max-w-3xl mx-auto mb-8">
          Our carefully crafted components help you focus on business logic
          instead of UI boilerplate. Compatible with Angular Material and
          Tailwind CSS.
        </p>

        <mat-divider
          class="!my-8 !border-gray-200 dark:!border-gray-700 max-w-md mx-auto"
        ></mat-divider>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button mat-flat-button color="primary" class="!px-8 !py-3 !text-lg">
            <span class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Watch Demo
            </span>
          </button>

          <button
            mat-stroked-button
            class="!px-8 !py-3 !text-lg !border-gray-300 dark:!border-gray-600"
          >
            Explore Components
          </button>
        </div>
      </div>
    </section>
  \`,
})
export default class Hero4 {}
`,
];

export const heroBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Modern Hero Section',
    description:
      'Clean design with call-to-action button and gradient background',
    previewUrl: 'https://placehold.co/600x400?text=Modern+Hero',
    iframeUrl: '/examples/hero/1',
  },
  {
    id: '2',
    title: 'Product Hero',
    description: 'Showcase your product with image and feature highlights',
    previewUrl: 'https://placehold.co/600x400?text=Product+Hero',
    iframeUrl: '/examples/hero/2',
  },
  {
    id: '3',
    title: 'Minimal Hero',
    description: 'Typography-focused with subtle animations',
    previewUrl: 'https://placehold.co/600x400?text=Minimal+Hero',
    iframeUrl: '/examples/hero/3',
  },
  {
    id: '4',
    title: 'Video Background Hero',
    description: 'Full-screen video background with overlay content',
    previewUrl: 'https://placehold.co/600x400?text=Video+Hero',
    iframeUrl: '/examples/hero/4',
  },
];

export const heroSectionsData = {
  title: 'UI Heroes Collection',
  description:
    'Eye-catching landing page headers with CTAs, background images, and compelling content.',
  path: 'heroes',
  blocks: [...heroBlocks],
};

export const heroBlocksWithViews: BlockData[] = heroBlocks.map(
  (block, index) => {
    // Definimos todos los code snippets por tipo de bloque
    const codeTemplates: any = {
      '1': {
        template: `<div class="hero-gradient bg-gradient-to-r from-blue-600 to-indigo-800">
  <div class="container mx-auto px-4 py-20 text-center text-white">
    <h1 class="text-5xl font-bold mb-6">{{ title }}</h1>
    <p class="text-xl mb-8 max-w-2xl mx-auto">{{ description }}</p>
    <div class="flex justify-center gap-4">
      <button mat-raised-button color="primary" class="!text-lg">
        Get Started
      </button>
      <button mat-stroked-button color="white">Learn More</button>
    </div>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modern-hero',
  templateUrl: './modern-hero.component.html',
  styleUrls: ['./modern-hero.component.css'],
  standalone: true,
  imports: [MatButtonModule]
})
export class ModernHeroComponent {
  title = 'Transform Your Digital Experience';
  description = 'Our platform delivers cutting-edge solutions for your business needs';
}`,
        styles: `/* Using Tailwind for most styles */
.hero-gradient {
  min-height: 600px;
  display: flex;
  align-items: center;
  
  /* Fallback for older browsers */
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
}`,
      },
      '2': {
        template: `<div class="product-hero bg-white">
  <div class="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ productName }}</h1>
      <ul class="mb-8 space-y-3">
        <li *ngFor="let feature of features" class="flex items-center text-gray-700">
          <mat-icon class="mr-2 text-green-500">check_circle</mat-icon>
          {{ feature }}
        </li>
      </ul>
      <button mat-flat-button color="accent" class="!px-8 !py-2">Buy Now</button>
    </div>
    <div class="rounded-xl shadow-2xl overflow-hidden border-8 border-white">
      <img [src]="productImage" [alt]="productName" class="w-full h-auto">
    </div>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-hero',
  templateUrl: './product-hero.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})
export class ProductHeroComponent {
  productName = 'Premium Dashboard Pro';
  productImage = '/assets/images/dashboard-preview.png';
  features = [
    'Real-time analytics',
    'Customizable widgets',
    'Team collaboration tools',
    '24/7 priority support'
  ];
}`,
        styles: `.product-hero {
  min-height: 500px;
  
  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.03);
    }
  }
}`,
      },
      '3': {
        template: `<div class="minimal-hero bg-gray-50">
  <div class="max-w-4xl mx-auto text-center px-4 py-32">
    <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight">
      <span class="block">Elegant Simplicity</span>
      <span class="block font-medium mt-2">in Design</span>
    </h1>
    <div class="border-t border-b border-gray-200 py-6 max-w-md mx-auto">
      <p class="text-gray-600">The art of minimal digital experiences</p>
    </div>
    <button mat-button color="primary" class="mt-12 !font-normal">
      Discover More
      <mat-icon>arrow_forward</mat-icon>
    </button>
  </div>
</div>`,
        component: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-minimal-hero',
  templateUrl: './minimal-hero.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})
export class MinimalHeroComponent {}`,
        styles: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.minimal-hero {
  h1 {
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.03em;
  }
  
  animation: fadeIn 1s ease-out forwards;
}`,
      },
      '4': {
        template: `<div class="video-hero relative h-screen overflow-hidden">
  <video #videoBg autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
    <source src="/assets/videos/hero-bg.mp4" type="video/mp4">
  </video>
  
  <div class="absolute inset-0 bg-black/40 flex items-center">
    <div class="container mx-auto px-6 text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ headline }}</h1>
      <div class="max-w-2xl">
        <p class="text-xl mb-8">{{ subheadline }}</p>
        <div class="flex gap-4">
          <button mat-raised-button color="primary">Get Started</button>
          <button mat-stroked-button color="white">View Demo</button>
        </div>
      </div>
    </div>
  </div>
  
  <button matIconButton 
          class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white bg-black/30 rounded-full"
          (click)="toggleMute()">
    <mat-icon>{{ isMuted ? 'volume_off' : 'volume_up' }}</mat-icon>
  </button>
</div>`,
        component: `import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})
export class VideoHeroComponent implements AfterViewInit {
  @ViewChild('videoBg') video!: ElementRef<HTMLVideoElement>;
  isMuted = true;
  
  headline = 'Immersive Experiences';
  subheadline = 'Create memorable moments with our video solutions';
  
  ngAfterViewInit() {
    this.video.nativeElement.play();
  }
  
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.video.nativeElement.muted = this.isMuted;
  }
}`,
        styles: `.video-hero video {
  filter: brightness(0.8);
}

/* Ensure buttons are above video */
.mat-mdc-button {
  z-index: 10;
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
