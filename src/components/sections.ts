import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import Clipboard from '@services/clipboard';
import Examples from '@services/examples';
import { UISection } from '@data/sections';

@Component({
  selector: 'app-sections',
  providers: [Clipboard, Examples],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="min-h-screen">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Component Library</h1>
          <p class="text-xl mb-8">
            Browse and copy production-ready Angular components
          </p>

          <!-- Search -->
          <div class="max-w-md mx-auto">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Search components...</mat-label>
              <input
                matInput
                [(ngModel)]="searchQuery"
                placeholder="Enter component name or tag"
              />
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <mat-chip-option
            *ngFor="let category of categories"
            [selected]="selectedCategory() === category"
            (click)="selectCategory(category)"
            class="cursor-pointer"
          >
            {{ category }}
          </mat-chip-option>
          <mat-chip-option
            [selected]="selectedCategory() === null"
            (click)="selectCategory(null)"
            class="cursor-pointer"
          >
            All
          </mat-chip-option>
        </div>

        <!-- Components Grid -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <mat-card
            *ngFor="let section of filteredSections()"
            class="overflow-hidden"
          >
            <!-- Preview -->
            <div class="p-6 border-b">
              <div class="flex items-center justify-between mb-4">
                <span
                  class="inline-block px-3 py-1 text-xs font-medium rounded-full"
                >
                  {{ section.category }}
                </span>
                <button
                  mat-icon-button
                  (click)="copyCode(section)"
                  [attr.aria-label]="'Copy ' + section.name + ' code'"
                >
                  <mat-icon>content_copy</mat-icon>
                </button>
              </div>

              <h3 class="text-xl font-semibold mb-2">
                {{ section.name }}
              </h3>
              <p class="text-sm mb-4">
                {{ section.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1">
                <span
                  *ngFor="let tag of section.tags.slice(0, 4)"
                  class="inline-block px-2 py-1 text-xs rounded"
                >
                  {{ tag }}
                </span>
                <span
                  *ngIf="section.tags.length > 4"
                  class="inline-block px-2 py-1 text-xs rounded"
                >
                  +{{ section.tags.length - 4 }}
                </span>
              </div>
            </div>

            <!-- Code Tabs -->
            <mat-tab-group class="component-tabs">
              <mat-tab label="Preview">
                <div class="p-6">
                  <div class="border rounded-lg p-4 min-h-[300px]">
                    <div class="text-center py-8">
                      <mat-icon class="text-4xl mb-2">preview</mat-icon>
                      <p>Live preview would render here</p>
                      <p class="text-sm">{{ section.name }} component</p>
                    </div>
                  </div>
                </div>
              </mat-tab>

              <mat-tab label="HTML">
                <div class="p-6">
                  <div class="relative">
                    <button
                      mat-icon-button
                      (click)="copyToClipboard(section.code.html)"
                      class="absolute top-2 right-2 z-10"
                    >
                      <mat-icon>content_copy</mat-icon>
                    </button>
                    <pre class="p-4 rounded-lg overflow-x-auto text-sm">{{
                      section.code.html
                    }}</pre>
                  </div>
                </div>
              </mat-tab>

              <mat-tab label="TypeScript">
                <div class="p-6">
                  <div class="relative">
                    <button
                      mat-icon-button
                      (click)="copyToClipboard(section.code.typescript)"
                      class="absolute top-2 right-2 z-10"
                    >
                      <mat-icon>content_copy</mat-icon>
                    </button>
                    <pre class="p-4 rounded-lg overflow-x-auto text-sm">{{
                      section.code.typescript
                    }}</pre>
                  </div>
                </div>
              </mat-tab>

              <mat-tab label="Dependencies">
                <div class="p-6">
                  <h4 class="font-semibold mb-4">Required Dependencies:</h4>
                  <div class="space-y-2">
                    <div
                      *ngFor="let dep of section.code.dependencies"
                      class="flex items-center justify-between p-3 rounded-lg"
                    >
                      <code class="text-sm">{{ dep }}</code>
                      <button
                        mat-icon-button
                        (click)="copyToClipboard('npm install ' + dep)"
                      >
                        <mat-icon>content_copy</mat-icon>
                      </button>
                    </div>
                  </div>
                  <div class="mt-4 p-4 border rounded-lg">
                    <p class="text-sm">
                      <strong>Installation:</strong> Run
                      <code class="px-1 rounded"
                        >npm install
                        {{ section.code.dependencies.join(' ') }}</code
                      >
                    </p>
                  </div>
                </div>
              </mat-tab>
            </mat-tab-group>
          </mat-card>
        </div>

        <!-- Empty State -->
        <div *ngIf="filteredSections().length === 0" class="text-center py-16">
          <mat-icon class="text-6xl mb-4">search_off</mat-icon>
          <h3 class="text-xl font-medium mb-2">No components found</h3>
          <p class="mb-4">Try adjusting your search or filter criteria</p>
          <button mat-button (click)="clearFilters()">Clear all filters</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .component-tabs {
        :deep(.mat-mdc-tab-body-content) {
          padding: 0 !important;
        }
      }

      pre {
        line-height: 1.5;
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
      }
    `,
  ],
})
export default class Sections {
  private sectionsService = inject(Examples);
  private clipboardService = inject(Clipboard);
  private snackBar = inject(MatSnackBar);

  public sections = this.sectionsService.getAllSections();
  public categories = this.sectionsService.getCategories();

  public searchQuery = signal('');
  public selectedCategory = signal<string | null>(null);

  public filteredSections = computed(() => {
    let filtered = this.sections;

    const category = this.selectedCategory();
    if (category) {
      filtered = filtered.filter((section) => section.category === category);
    }

    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      filtered = filtered.filter(
        (section) =>
          section.name.toLowerCase().includes(query) ||
          section.description.toLowerCase().includes(query) ||
          section.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  });

  selectCategory(category: string | null): void {
    this.selectedCategory.set(category);
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set(null);
  }

  async copyCode(section: UISection): Promise<void> {
    const fullCode = `<!-- ${section.name} Component -->
    
${section.code.html}

/* TypeScript */
${section.code.typescript}

/* Dependencies */
// npm install ${section.code.dependencies.join(' ')}`;

    const success = await this.clipboardService.copyToClipboard(fullCode);

    if (success) {
      this.snackBar.open(`${section.name} code copied to clipboard!`, 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    } else {
      this.snackBar.open('Failed to copy code. Please try again.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
  }

  async copyToClipboard(text: string): Promise<void> {
    const success = await this.clipboardService.copyToClipboard(text);

    if (success) {
      this.snackBar.open('Copied to clipboard!', 'Close', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    } else {
      this.snackBar.open('Failed to copy. Please try again.', 'Close', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
  }
}
