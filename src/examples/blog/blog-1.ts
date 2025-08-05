import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 1" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">First Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the first post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 2" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Second Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the second post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 3" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Third Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the third post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>`,
})
export default class Blog1 {}
