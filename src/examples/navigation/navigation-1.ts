import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'example-navigation-1',
  imports: [MatToolbar, MatButton],
  template: `
    <mat-toolbar class="bg-primary-600 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <span class="text-xl font-bold">Brand</span>
        <nav class="flex items-center gap-4">
          <a mat-button>Home</a>
          <a mat-button>Features</a>
          <a mat-button>Pricing</a>
        </nav>
      </div>
    </mat-toolbar>
  `,
})
export default class Navigation1 {}
