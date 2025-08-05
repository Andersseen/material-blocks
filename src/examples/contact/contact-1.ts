import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-contact1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Your name" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="you@example.com" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Message</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">
          Send Message
        </button>
      </form>
    </div>
  </section>`,
})
export default class Contact1 {}
