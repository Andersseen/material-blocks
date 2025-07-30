import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-testimonial-1',
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
            @for (item of getStarsArray(currentTestimonial.rating); track
            $index) {
            <mat-icon class="text-yellow-500">star</mat-icon>
            }
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
  imports: [MatIcon],
})
export default class CarouselTestimonialsComponent {
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
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
