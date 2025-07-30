import { Component } from '@angular/core';

@Component({
  selector: 'example-testimonial-3',
  template: `<section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
        <p class="text-muted-foreground">{{ sectionDescription }}</p>
      </div>
      <div class="grid gap-12 md:grid-cols-2">
        @for (testimonial of testimonials; track $index) {
        <div>
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
        }
      </div>
    </div>
  </section>`,
})
export default class TwoColumnTestimonialsComponent {
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
}
