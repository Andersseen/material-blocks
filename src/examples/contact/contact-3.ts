import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact3',
  standalone: true,
  imports: [MatIconModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-2 items-start">
        <div class="rounded-md overflow-hidden shadow">
          <img
            src="https://placehold.co/600x400?text=Map"
            alt="Map"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="space-y-4">
          <h2 class="text-3xl font-bold">Our Office</h2>
          <p class="text-muted-foreground">
            Stop by our office or send us a message anytime.
          </p>
          <div class="flex items-center gap-3">
            <mat-icon>place</mat-icon>
            <span>123 Main St, City</span>
          </div>
          <div class="flex items-center gap-3">
            <mat-icon>phone</mat-icon>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="flex items-center gap-3">
            <mat-icon>mail</mat-icon>
            <span>info&#64;example.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export default class Contact3 {}
