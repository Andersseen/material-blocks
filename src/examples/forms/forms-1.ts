import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4 max-w-md">
      <h2 class="text-3xl font-bold text-center mb-8">Sign In</h2>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput type="email" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput type="password" />
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">Login</button>
      </form>
    </div>
  </section>`,
})
export default class Forms1 {}
