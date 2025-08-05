import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-4',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule],
  template: `<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <div class="md:col-span-2 space-y-6">
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post One</h3>
        <p class="text-muted-foreground mb-4">Summary of the first main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post Two</h3>
        <p class="text-muted-foreground mb-4">Summary of the second main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
    <aside class="space-y-4">
      <h4 class="font-semibold">Categories</h4>
      <mat-nav-list>
        <a mat-list-item href="#">Design</a>
        <a mat-list-item href="#">Development</a>
        <a mat-list-item href="#">Tutorials</a>
      </mat-nav-list>
    </aside>
  </div>
</section>`,
})
export default class Blog4 {}
