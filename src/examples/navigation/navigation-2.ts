import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation-2',
  imports: [MatToolbar, MatButton, MatIconButton, MatIcon],
  template: `
    <mat-toolbar class="bg-white dark:bg-gray-900">
      <div class="container mx-auto flex justify-between items-center">
        <button mat-icon-button class="md:hidden">
          <mat-icon>menu</mat-icon>
        </button>
        <a class="text-xl font-bold">Brand</a>
        <nav class="hidden md:flex items-center gap-4">
          <a mat-button>Docs</a>
          <a mat-button>Blog</a>
          <a mat-button>Contact</a>
        </nav>
        <button mat-raised-button color="primary" class="hidden md:block">
          Sign Up
        </button>
      </div>
    </mat-toolbar>
  `,
})
export default class Navigation2 {}
