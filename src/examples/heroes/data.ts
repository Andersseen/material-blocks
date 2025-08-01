import { type BlockData, type BlockCard } from '@shared/interfaces';

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

export const heroBlocksWithViews: BlockData[] = heroBlocks.map((block) => {
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
  styleUrls: ['./modern-hero.component.scss'],
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
