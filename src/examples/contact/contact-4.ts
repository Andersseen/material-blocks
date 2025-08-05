import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact4',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Need Help?</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <mat-card class="p-6 text-center">
          <mat-icon class="mb-4 text-4xl text-primary-600">mail</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Email</h3>
          <p class="text-muted-foreground mb-4">support@example.com</p>
          <button mat-stroked-button color="primary">Send Email</button>
        </mat-card>
        <mat-card class="p-6 text-center">
          <mat-icon class="mb-4 text-4xl text-primary-600">phone</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Phone</h3>
          <p class="text-muted-foreground mb-4">+1 (555) 123-4567</p>
          <button mat-stroked-button color="primary">Call Now</button>
        </mat-card>
        <mat-card class="p-6 text-center">
          <mat-icon class="mb-4 text-4xl text-primary-600">chat</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Live Chat</h3>
          <p class="text-muted-foreground mb-4">Chat with our team</p>
          <button mat-stroked-button color="primary">Start Chat</button>
        </mat-card>
      </div>
    </div>
  </section>`,
})
export default class Contact4 {}
