import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4 space-y-6">
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post One</h3>
        <p class="text-muted-foreground mb-4">Short intro to the first post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Two</h3>
        <p class="text-muted-foreground mb-4">Short intro to the second post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Three</h3>
        <p class="text-muted-foreground mb-4">Short intro to the third post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>`,
})
export default class Blog2 {}
