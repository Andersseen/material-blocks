import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-3',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4 space-y-8">
    <mat-card class="overflow-hidden">
      <img src="https://placehold.co/800x300" alt="featured" class="w-full h-48 object-cover">
      <mat-card-content>
        <h2 class="text-2xl font-bold mb-2">Featured Post</h2>
        <p class="text-muted-foreground mb-4">Highlight an important article with a larger card.</p>
        <button mat-raised-button color="primary">Read Article</button>
      </mat-card-content>
    </mat-card>
    <div class="grid md:grid-cols-2 gap-6">
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post One</h3>
        <p class="text-muted-foreground mb-4">A supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post Two</h3>
        <p class="text-muted-foreground mb-4">Another supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
  </div>
</section>`,
})
export default class Blog3 {}
