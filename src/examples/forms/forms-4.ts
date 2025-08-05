import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'example-forms4',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  template: `<section class="py-24">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-3xl font-bold text-center mb-8">Feedback</h2>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Rating</mat-label>
          <mat-select>
            <mat-option value="1">1</mat-option>
            <mat-option value="2">2</mat-option>
            <mat-option value="3">3</mat-option>
            <mat-option value="4">4</mat-option>
            <mat-option value="5">5</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Comments</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">Submit</button>
      </form>
    </div>
  </section>`,
})
export default class Forms4 {}
