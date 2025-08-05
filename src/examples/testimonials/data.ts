import {
  type BlockData,
  type BlockCard,
  SectionData,
} from '@shared/interfaces';

export const testimonialBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Basic Testimonials Grid',
    description:
      'Three-column grid with avatars, roles, reviews and star ratings',
    previewUrl: 'https://placehold.co/600x400?text=Basic+Testimonials',
    iframeUrl: '/examples/testimonials/1',
  },
  {
    id: '2',
    title: 'Colorful Card Testimonials',
    description:
      'Cards with colored headers, overlapping avatar and rating stars',
    previewUrl: 'https://placehold.co/600x400?text=Colorful+Testimonials',
    iframeUrl: '/examples/testimonials/2',
  },
  {
    id: '3',
    title: 'Two Column Testimonials',
    description: 'Minimalist two‑column layout showing quotes and author names',
    previewUrl: 'https://placehold.co/600x400?text=Two+Column+Testimonials',
    iframeUrl: '/examples/testimonials/3',
  },
  {
    id: '4',
    title: 'Carousel Testimonials',
    description:
      'Single‑card carousel with navigation buttons and star ratings',
    previewUrl: 'https://placehold.co/600x400?text=Carousel+Testimonials',
    iframeUrl: '/examples/testimonials/4',
  },
];

export const testimonialSectionsData: SectionData = {
  title: 'UI Testimonials Collection',
  description: 'Authentic customer feedback to build trust and credibility.',
  path: 'testimonials',
  blocks: [...testimonialBlocks],
};

export const testimonialBlocksWithViews: BlockData[] = testimonialBlocks.map(
  (block) => {
    const codeTemplates: any = {
      '1': {
        template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-xl mx-auto mb-10">
      <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
      <p class="text-muted-foreground">{{ sectionDescription }}</p>
    </div>
    <div class="grid gap-8 md:grid-cols-3">
      <div
        *ngFor="let testimonial of testimonials"
        class="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md"
      >
        <img
          [src]="testimonial.avatar"
          alt="Avatar of {{ testimonial.name }}"
          class="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <h5 class="text-xl font-semibold mb-1">{{ testimonial.name }}</h5>
        <p class="text-sm text-primary mb-3">{{ testimonial.role }}</p>
        <p class="text-neutral-600 dark:text-neutral-300 mb-4">
          {{ testimonial.feedback }}
        </p>
        <div class="flex justify-center">
          <ng-container *ngFor="let star of getStarsArray(testimonial.rating)">
            <mat-icon class="text-yellow-500">star</mat-icon>
          </ng-container>
        </div>
      </div>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonial-grid',
  templateUrl: './testimonial-grid.component.html',
  styleUrls: ['./testimonial-grid.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class TestimonialGridComponent {
  sectionTitle = 'Testimonials';
  sectionDescription =
    'Hear what our customers have to say about us';
  testimonials = [
    {
      name: 'Maria Smantha',
      role: 'Web Developer',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab.',
      avatar: '/assets/images/avatar1.jpg',
      rating: 5,
    },
    {
      name: 'Lisa Cudrow',
      role: 'Graphic Designer',
      feedback:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      avatar: '/assets/images/avatar2.jpg',
      rating: 5,
    },
    {
      name: 'John Smith',
      role: 'Marketing Specialist',
      feedback:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      avatar: '/assets/images/avatar3.jpg',
      rating: 4,
    },
  ];

  /** Devuelve un array con el número de estrellas necesarias */
  getStarsArray(count: number): undefined[] {
    return Array(count);
  }
}`,
        styles: ` /* Using Tailwind for most styles *`,
      },
      '2': {
        template: `<section class="py-24 bg-gray-50 dark:bg-neutral-900">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-xl mx-auto mb-10">
      <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
      <p class="text-muted-foreground">{{ sectionDescription }}</p>
    </div>
    <div class="grid gap-8 md:grid-cols-3">
      <div
        *ngFor="let card of testimonialCards"
        class="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800"
      >
        <div
          [ngStyle]="{ backgroundColor: card.headerColor }"
          class="h-24"
        ></div>
        <div class="-mt-12 flex justify-center">
          <img
            [src]="card.avatar"
            [alt]="card.name"
            class="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-800 object-cover"
          />
        </div>
        <div class="p-6 text-center">
          <h4 class="text-xl font-semibold mb-2">{{ card.name }}</h4>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            {{ card.role }}
          </p>
          <p class="text-neutral-600 dark:text-neutral-300 mb-4">
            {{ card.feedback }}
          </p>
          <div class="flex justify-center">
            <ng-container *ngFor="let star of getStarsArray(card.rating)">
              <mat-icon class="text-yellow-500">star</mat-icon>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-color-card-testimonials',
  templateUrl: './color-card-testimonials.component.html',
  styleUrls: ['./color-card-testimonials.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class ColorCardTestimonialsComponent {
  sectionTitle = 'Testimonials';
  sectionDescription = 'What our clients say';
  testimonialCards = [
    {
      name: 'Maria Smantha',
      role: 'Web Developer',
      feedback:
        'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.',
      avatar: '/assets/images/avatar1.jpg',
      rating: 5,
      headerColor: '#9d789b',
    },
    {
      name: 'Lisa Cudrow',
      role: 'Graphic Designer',
      feedback:
        'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
      avatar: '/assets/images/avatar2.jpg',
      rating: 5,
      headerColor: '#7a81a8',
    },
    {
      name: 'John Smith',
      role: 'Marketing Specialist',
      feedback:
        'Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.',
      avatar: '/assets/images/avatar3.jpg',
      rating: 4,
      headerColor: '#6d5b98',
    },
  ];

  getStarsArray(count: number): undefined[] {
    return Array(count);
  }
}`,
        styles: ` /* Using Tailwind for most styles *`,
      },
      '3': {
        template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-xl mx-auto mb-10">
      <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
      <p class="text-muted-foreground">{{ sectionDescription }}</p>
    </div>
    <div class="grid gap-12 md:grid-cols-2">
      <div *ngFor="let testimonial of testimonials">
        <div class="flex justify-center mb-4">
          <img
            [src]="testimonial.avatar"
            [alt]="testimonial.name"
            class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30 object-cover"
          />
        </div>
        <p class="my-4 text-xl text-neutral-600 dark:text-neutral-300">
          "{{ testimonial.feedback }}"
        </p>
        <p class="italic text-neutral-500 dark:text-neutral-400">
          - {{ testimonial.name }}
        </p>
      </div>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';

@Component({
  selector: 'app-two-column-testimonials',
  templateUrl: './two-column-testimonials.component.html',
  standalone: true,
})
export class TwoColumnTestimonialsComponent {
  sectionTitle = 'Testimonials';
  sectionDescription = 'What people are saying';
  testimonials = [
    {
      name: 'Anna Morian',
      feedback:
        'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.',
      avatar: '/assets/images/avatar22.jpg',
    },
    {
      name: 'Teresa May',
      feedback:
        'Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed adipiscing elit.',
      avatar: '/assets/images/avatar19.jpg',
    },
  ];
}`,
        styles: ` /* Using Tailwind for most styles *`,
      },
      '4': {
        template: `<section class="py-24 bg-gray-50 dark:bg-neutral-900">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-xl mx-auto mb-10">
      <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
      <p class="text-muted-foreground">{{ sectionDescription }}</p>
    </div>
    <div class="relative">
      <div
        class="p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-md text-center"
      >
        <div class="flex justify-center mb-4">
          <img
            [src]="currentTestimonial.avatar"
            [alt]="currentTestimonial.name"
            class="w-24 h-24 rounded-full object-cover shadow-lg"
          />
        </div>
        <p class="mb-4 text-lg text-neutral-600 dark:text-neutral-300">
          "{{ currentTestimonial.feedback }}"
        </p>
        <h5 class="text-xl font-semibold">{{ currentTestimonial.name }}</h5>
        <p class="text-sm text-primary mt-1">
          {{ currentTestimonial.role }}
        </p>
        <div class="flex justify-center mt-2">
          <ng-container
            *ngFor="let star of getStarsArray(currentTestimonial.rating)"
          >
            <mat-icon class="text-yellow-500">star</mat-icon>
          </ng-container>
        </div>
      </div>
      <button
        mat-icon-button
        (click)="prev()"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-700 rounded-full p-2 shadow-md"
      >
        <mat-icon>chevron_left</mat-icon>
      </button>
      <button
        mat-icon-button
        (click)="next()"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-700 rounded-full p-2 shadow-md"
      >
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carousel-testimonials',
  templateUrl: './carousel-testimonials.component.html',
  styleUrls: ['./carousel-testimonials.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
})
export class CarouselTestimonialsComponent {
  sectionTitle = 'Testimonials';
  sectionDescription = 'Our customers love us';
  testimonials = [
    {
      name: 'John Smith',
      role: 'Marketing Specialist',
      feedback:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      avatar: '/assets/images/avatar3.jpg',
      rating: 5,
    },
    {
      name: 'Anna Morian',
      role: 'Product Manager',
      feedback:
        'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.',
      avatar: '/assets/images/avatar22.jpg',
      rating: 4,
    },
    {
      name: 'Lisa Cudrow',
      role: 'Graphic Designer',
      feedback:
        'Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed adipiscing elit.',
      avatar: '/assets/images/avatar2.jpg',
      rating: 5,
    },
  ];
  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  getStarsArray(count: number): undefined[] {
    return Array(count);
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }
}`,
        styles: ` /* Using Tailwind for most styles *`,
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
    };
  }
);
