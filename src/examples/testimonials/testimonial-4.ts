import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-testimonial-4',
  template: `<section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
        <p class="text-muted-foreground">{{ sectionDescription }}</p>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        @for (testimonial of testimonials; track $index) {
        <div
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
            @for (star of getStarsArray(testimonial.rating); track $index) {}
            <mat-icon class="text-yellow-500">star</mat-icon>
          </div>
        </div>
        }
      </div>
    </div>
  </section>`,
  imports: [MatIcon],
})
export default class TestimonialGridComponent {
  sectionTitle = 'Testimonials';
  sectionDescription = 'Hear what our customers have to say about us';
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

  getStarsArray(count: number): undefined[] {
    return Array(count);
  }
}
