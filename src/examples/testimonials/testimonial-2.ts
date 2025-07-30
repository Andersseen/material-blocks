import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-testimonial-3',
  template: `<section class="py-24 bg-gray-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
        <p class="text-muted-foreground">{{ sectionDescription }}</p>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        @for (card of testimonialCards; track $index) {
        <div
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
              @for (star of getStarsArray(card.rating); track $index) {
              <mat-icon class="text-yellow-500">star</mat-icon>
              }
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  </section>`,
  imports: [MatIcon, NgStyle],
})
export default class ColorCardTestimonialsComponent {
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
}
