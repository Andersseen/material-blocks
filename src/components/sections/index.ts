import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';

interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  componentCount: number;
  tags: string[];
  isPopular?: boolean;
  gradient: string;
}

@Component({
  selector: 'app-sections',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatRippleModule,
  ],
  template: `
    <section class="min-h-screen">
      <!-- Hero Section -->

      <div class="px-4 sm:px-6 lg:px-8 pb-16">
        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto mb-16">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <mat-card
              class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="text-2xl sm:text-3xl font-bold mb-2">
                {{ getTotalComponents() }}
              </div>
              <div class="text-sm sm:text-base opacity-70">
                Total Components
              </div>
            </mat-card>
            <mat-card
              class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="text-2xl sm:text-3xl font-bold mb-2">
                {{ sections.length }}
              </div>
              <div class="text-sm sm:text-base opacity-70">Categories</div>
            </mat-card>
            <mat-card
              class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="text-2xl sm:text-3xl font-bold mb-2">100%</div>
              <div class="text-sm sm:text-base opacity-70">Responsive</div>
            </mat-card>
            <mat-card
              class="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="text-2xl sm:text-3xl font-bold mb-2">A11Y</div>
              <div class="text-sm sm:text-base opacity-70">Accessible</div>
            </mat-card>
          </div>
        </div>

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
            <mat-card
              *ngFor="let section of sections; trackBy: trackBySection"
              class="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform"
              matRipple
              (click)="onSectionClick(section)"
            >
              <!-- Gradient Background -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                [ngClass]="section.gradient"
              ></div>

              <!-- Popular Badge -->
              <div
                *ngIf="section.isPopular"
                class="absolute top-3 right-3 z-10"
              >
                <mat-chip-set>
                  <mat-chip highlighted class="text-xs font-medium"
                    >Popular</mat-chip
                  >
                </mat-chip-set>
              </div>

              <!-- Icon Section -->
              <div class="p-4 sm:p-6 pb-2 sm:pb-3">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  [ngClass]="section.gradient"
                >
                  <mat-icon class="text-2xl sm:text-3xl text-white">{{
                    section.icon
                  }}</mat-icon>
                </div>
              </div>

              <mat-card-content class="p-4 sm:p-6 pt-0">
                <!-- Title and Count -->
                <div class="text-center mb-3 sm:mb-4">
                  <h3
                    class="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300"
                  >
                    {{ section.title }}
                  </h3>
                  <div class="text-xs sm:text-sm opacity-60 font-medium">
                    {{ section.componentCount }} Components
                  </div>
                </div>

                <!-- Description -->
                <p
                  class="text-xs sm:text-sm opacity-80 leading-relaxed mb-4 text-center min-h-[3rem] sm:min-h-[4rem]"
                >
                  {{ section.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  <mat-chip-set>
                    <mat-chip
                      *ngFor="let tag of section.tags.slice(0, 2)"
                      class="text-xs"
                    >
                      {{ tag }}
                    </mat-chip>
                    <mat-chip
                      *ngIf="section.tags.length > 2"
                      class="text-xs opacity-60"
                    >
                      +{{ section.tags.length - 2 }}
                    </mat-chip>
                  </mat-chip-set>
                </div>
              </mat-card-content>

              <!-- Hover Actions -->
              <div
                class="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                <div class="flex gap-2">
                  <button mat-button class="flex-1 text-xs sm:text-sm">
                    <mat-icon class="mr-1 text-base">visibility</mat-icon>
                    Preview
                  </button>
                  <button
                    mat-raised-button
                    color="primary"
                    class="flex-1 text-xs sm:text-sm"
                  >
                    <mat-icon class="mr-1 text-base">code</mat-icon>
                    View Code
                  </button>
                </div>
              </div>
            </mat-card>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="max-w-4xl mx-auto mt-16 sm:mt-24">
          <mat-card class="relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10"
            ></div>
            <div class="relative p-6 sm:p-8 lg:p-12 text-center">
              <h2 class="text-2xl sm:text-3xl font-bold mb-4">
                Need Something Custom?
              </h2>
              <p
                class="text-base sm:text-lg opacity-70 mb-6 sm:mb-8 max-w-2xl mx-auto"
              >
                Can't find the component you're looking for? Let us know and
                we'll add it to our growing library.
              </p>
              <div
                class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              >
                <button
                  mat-raised-button
                  color="primary"
                  class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
                >
                  <mat-icon class="mr-2">add_circle</mat-icon>
                  Request Component
                </button>
                <button
                  mat-stroked-button
                  class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
                >
                  <mat-icon class="mr-2">GitHub</mat-icon>
                  Contribute
                </button>
                <button
                  mat-button
                  class="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
                >
                  <mat-icon class="mr-2">help</mat-icon>
                  Documentation
                </button>
              </div>
            </div>
          </mat-card>
        </div>
      </div>
    </section>
  `,
})
export default class Sections {
  sections: Section[] = [
    {
      id: 'features',
      title: 'Features',
      description:
        'Showcase product features and benefits with various layouts, grids, and interactive elements.',
      icon: 'featured_play_list',
      componentCount: 12,
      tags: ['Product', 'Benefits', 'Showcase', 'Grid'],
      isPopular: true,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      id: 'heroes',
      title: 'Heroes',
      description:
        'Eye-catching landing page headers with CTAs, background images, and compelling content.',
      icon: 'web_asset',
      componentCount: 15,
      tags: ['Landing', 'Header', 'CTA', 'Background'],
      isPopular: true,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      id: 'pricing',
      title: 'Pricing',
      description:
        'Professional pricing tables, subscription plans, and service comparison layouts.',
      icon: 'payments',
      componentCount: 8,
      tags: ['Plans', 'Tables', 'Subscription', 'Compare'],
      isPopular: true,
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      description:
        'Customer reviews, testimonials, and social proof components with carousels and grids.',
      icon: 'format_quote',
      componentCount: 10,
      tags: ['Reviews', 'Social Proof', 'Carousel', 'Customer'],
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
    {
      id: 'team',
      title: 'Team',
      description:
        'Professional team member profiles, employee showcases, and organizational layouts.',
      icon: 'groups',
      componentCount: 7,
      tags: ['Profiles', 'Staff', 'Organization', 'Cards'],
      gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    },
    {
      id: 'contact',
      title: 'Contact',
      description:
        'Contact forms, location maps, business information, and communication components.',
      icon: 'contact_mail',
      componentCount: 9,
      tags: ['Forms', 'Maps', 'Information', 'Communication'],
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
    },
    {
      id: 'footers',
      title: 'Footers',
      description:
        'Website footers with links, legal information, social media, and contact details.',
      icon: 'web',
      componentCount: 11,
      tags: ['Links', 'Legal', 'Social', 'Navigation'],
      gradient: 'bg-gradient-to-br from-gray-500 to-gray-600',
    },
    {
      id: 'navigation',
      title: 'Navigation',
      description:
        'Navigation bars, side menus, breadcrumbs, and mobile-friendly navigation components.',
      icon: 'menu',
      componentCount: 14,
      tags: ['Navbar', 'Menu', 'Breadcrumb', 'Mobile'],
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
    {
      id: 'stats',
      title: 'Statistics',
      description:
        'Data visualization, metrics display, counters, and achievement showcase components.',
      icon: 'analytics',
      componentCount: 6,
      tags: ['Data', 'Metrics', 'Counters', 'Charts'],
      gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    },
    {
      id: 'blog',
      title: 'Blog',
      description:
        'Article layouts, blog posts, news sections, and editorial content components.',
      icon: 'article',
      componentCount: 13,
      tags: ['Articles', 'Posts', 'News', 'Content'],
      gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description:
        'Product catalogs, shopping carts, checkout flows, and online store components.',
      icon: 'shopping_cart',
      componentCount: 16,
      tags: ['Products', 'Cart', 'Shop', 'Checkout'],
      gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    },
    {
      id: 'forms',
      title: 'Forms',
      description:
        'Advanced forms, multi-step wizards, validation patterns, and input components.',
      icon: 'dynamic_form',
      componentCount: 18,
      tags: ['Input', 'Validation', 'Wizard', 'Fields'],
      gradient: 'bg-gradient-to-br from-violet-500 to-violet-600',
    },
  ];

  trackBySection(index: number, section: Section): string {
    return section.id;
  }

  getTotalComponents(): number {
    return this.sections.reduce(
      (total, section) => total + section.componentCount,
      0
    );
  }

  onSectionClick(section: Section): void {
    console.log('Navigating to section:', section.id);
    // Router navigation logic here
  }
}
