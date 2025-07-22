export interface UISection {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: string;
  code: {
    html: string;
    typescript: string;
    dependencies: string[];
  };
  tags: string[];
}

export const SECTIONS: UISection[] = [
  {
    id: 'hero-centered',
    name: 'Centered Hero',
    category: 'Heroes',
    description:
      'Clean centered hero section with title, description, and CTA buttons',
    preview: 'hero-centered-preview',
    code: {
      html: `<section class="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
  <div class="absolute inset-0 bg-black/10"></div>
  <div class="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
    <div class="text-center">
      <h1 class="text-4xl sm:text-6xl font-bold mb-6 text-balance">
        Build Amazing Interfaces
      </h1>
      <p class="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-primary-100 text-balance">
        Copy-paste ready components built with Angular, Material Design, and Tailwind CSS
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button mat-raised-button class="bg-white text-primary-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold">
          Get Started
        </button>
        <button mat-stroked-button class="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
          View Components
        </button>
      </div>
    </div>
  </div>
</section>`,
      typescript: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hero-centered',
  standalone: true,
  imports: [MatButtonModule],
  template: \`<!-- HTML code here -->\`
})
export class HeroCenteredComponent {}`,
      dependencies: ['@angular/material/button'],
    },
    tags: ['hero', 'centered', 'gradient', 'cta'],
  },
  {
    id: 'features-grid',
    name: 'Feature Grid',
    category: 'Features',
    description: 'Clean 3-column feature grid with icons and descriptions',
    preview: 'features-grid-preview',
    code: {
      html: `<section class="py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Why Choose Our Components?
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Built with modern best practices and designed for accessibility and performance
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center group">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <mat-icon class="text-2xl">speed</mat-icon>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lightning Fast</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Optimized for performance with lazy loading and minimal bundle size
        </p>
      </div>
      
      <div class="text-center group">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <mat-icon class="text-2xl">accessibility</mat-icon>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Accessible</h3>
        <p class="text-gray-600 dark:text-gray-300">
          WCAG compliant with proper ARIA labels and keyboard navigation
        </p>
      </div>
      
      <div class="text-center group">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <mat-icon class="text-2xl">palette</mat-icon>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Customizable</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Easy to customize with Tailwind CSS and Angular Material theming
        </p>
      </div>
    </div>
  </div>
</section>`,
      typescript: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'features-grid',
  standalone: true,
  imports: [MatIconModule],
  template: \`<!-- HTML code here -->\`
})
export class FeaturesGridComponent {}`,
      dependencies: ['@angular/material/icon'],
    },
    tags: ['features', 'grid', 'icons', '3-column'],
  },
  {
    id: 'testimonials-cards',
    name: 'Testimonial Cards',
    category: 'Testimonials',
    description:
      'Customer testimonials in card layout with avatars and ratings',
    preview: 'testimonials-cards-preview',
    code: {
      html: `<section class="py-24 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What Our Users Say
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Join thousands of developers who love our components
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <mat-card class="p-6 card-hover">
        <div class="flex items-center mb-4">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&crop=face" 
               alt="Sarah Johnson" 
               class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">Frontend Developer</p>
          </div>
        </div>
        <div class="flex mb-4">
          <mat-icon *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400">star</mat-icon>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          "These components saved me weeks of development time. The quality and attention to detail is outstanding."
        </p>
      </mat-card>
      
      <mat-card class="p-6 card-hover">
        <div class="flex items-center mb-4">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&crop=face" 
               alt="Mike Chen" 
               class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">Mike Chen</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">Product Manager</p>
          </div>
        </div>
        <div class="flex mb-4">
          <mat-icon *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400">star</mat-icon>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          "Perfect for rapid prototyping. The components are production-ready and beautifully designed."
        </p>
      </mat-card>
      
      <mat-card class="p-6 card-hover">
        <div class="flex items-center mb-4">
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&crop=face" 
               alt="Emma Davis" 
               class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">Emma Davis</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">UI Designer</p>
          </div>
        </div>
        <div class="flex mb-4">
          <mat-icon *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400">star</mat-icon>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          "The design system is consistent and the dark mode support is flawless. Highly recommend!"
        </p>
      </mat-card>
    </div>
  </div>
</section>`,
      typescript: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'testimonials-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: \`<!-- HTML code here -->\`
})
export class TestimonialsCardsComponent {}`,
      dependencies: ['@angular/material/card', '@angular/material/icon'],
    },
    tags: ['testimonials', 'cards', 'reviews', 'ratings'],
  },
  {
    id: 'pricing-table',
    name: 'Pricing Table',
    category: 'Pricing',
    description: '3-tier pricing table with highlighted popular plan',
    preview: 'pricing-table-preview',
    code: {
      html: `<section class="py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Simple, Transparent Pricing
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Choose the plan that fits your needs
      </p>
    </div>
    
    <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Basic Plan -->
      <mat-card class="p-8 text-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic</h3>
        <div class="mb-6">
          <span class="text-4xl font-bold text-gray-900 dark:text-white">$9</span>
          <span class="text-gray-600 dark:text-gray-300">/month</span>
        </div>
        <ul class="space-y-4 mb-8 text-left">
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">10 Components</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Basic Support</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Commercial License</span>
          </li>
        </ul>
        <button mat-stroked-button class="w-full py-3">Choose Basic</button>
      </mat-card>
      
      <!-- Pro Plan (Popular) -->
      <mat-card class="p-8 text-center border-2 border-primary-500 relative">
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pro</h3>
        <div class="mb-6">
          <span class="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
          <span class="text-gray-600 dark:text-gray-300">/month</span>
        </div>
        <ul class="space-y-4 mb-8 text-left">
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">50+ Components</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Priority Support</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Commercial License</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Figma Files</span>
          </li>
        </ul>
        <button mat-raised-button color="primary" class="w-full py-3">Choose Pro</button>
      </mat-card>
      
      <!-- Enterprise Plan -->
      <mat-card class="p-8 text-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
        <div class="mb-6">
          <span class="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
          <span class="text-gray-600 dark:text-gray-300">/month</span>
        </div>
        <ul class="space-y-4 mb-8 text-left">
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Unlimited Components</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">24/7 Support</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Commercial License</span>
          </li>
          <li class="flex items-center">
            <mat-icon class="text-green-500 mr-3">check</mat-icon>
            <span class="text-gray-700 dark:text-gray-300">Custom Components</span>
          </li>
        </ul>
        <button mat-stroked-button class="w-full py-3">Contact Sales</button>
      </mat-card>
    </div>
  </div>
</section>`,
      typescript: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pricing-table',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`<!-- HTML code here -->\`
})
export class PricingTableComponent {}`,
      dependencies: [
        '@angular/material/card',
        '@angular/material/button',
        '@angular/material/icon',
      ],
    },
    tags: ['pricing', 'plans', 'cards', '3-tier'],
  },
];
