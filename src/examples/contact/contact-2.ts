import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
          <p class="text-muted-foreground">
            We'd love to hear from you. Reach us through any of the following
            ways or send us a message.
          </p>
          <div class="flex items-center gap-3">
            <mat-icon>phone</mat-icon>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="flex items-center gap-3">
            <mat-icon>mail</mat-icon>
            <span>support&#64;example.com</span>
          </div>
          <div class="flex items-center gap-3">
            <mat-icon>place</mat-icon>
            <span>123 Main St, City</span>
          </div>
        </div>
        <form class="grid gap-4">
          <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput type="email" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Message</mat-label>
            <textarea matInput rows="4"></textarea>
          </mat-form-field>
          <button mat-raised-button color="primary" class="w-full md:w-auto">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>`,
})
export default class Contact2 {}
