import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'd-quick-start',
  imports: [MatIcon, MatTabGroup, MatTab, MatCard, MatIconButton],
  template: `
    <mat-card class="mb-8">
      <div class="p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <mat-icon class="mr-3">rocket_launch</mat-icon>
          Quick Start
        </h2>

        <div class="space-y-6">
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <mat-icon class="mr-2">settings</mat-icon>
              Install Angular CLI globally
            </h3>

            <mat-tab-group animationDuration="0ms">
              <mat-tab label="npm">
                <div class="justify-between flex overflow-y-hidden">
                  <pre
                    class="p-4 rounded"
                  ><code #npmCommand>npm install -g &commat;angular/cli</code></pre>
                  <button mat-icon-button class="absolute right-2 top-2">
                    <mat-icon>content_copy</mat-icon>
                  </button>
                </div>
              </mat-tab>

              <mat-tab label="yarn">
                <div class="justify-between flex overflow-y-hidden">
                  <pre
                    class="p-4 rounded"
                  ><code #yarnCommand>yarn global add &commat;angular/cli</code></pre>
                  <button mat-icon-button class="absolute right-2 top-2">
                    <mat-icon>content_copy</mat-icon>
                  </button>
                </div>
              </mat-tab>

              <mat-tab label="pnpm">
                <div class="justify-between flex overflow-y-hidden">
                  <pre
                    class="p-4 rounded"
                  ><code #pnpmCommand>pnpm add -g &commat;angular/cli</code></pre>
                  <button mat-icon-button class="absolute right-2 top-2">
                    <mat-icon>content_copy</mat-icon>
                  </button>
                </div>
              </mat-tab>
            </mat-tab-group>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">2. Install Dependencies</h3>
            <div class="p-4 bg-neutral-500/50 rounded-lg overflow-x-auto">
              <pre><code># Using npm
npm install &commat;angular/material tailwindcss postcss autoprefixer
# or using yarn
yarn add &commat;angular/material tailwindcss postcss autoprefixer
# or using pnpm
pnpm add &commat;angular/material tailwindcss postcss autoprefixer</code></pre>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3">3. Import Styles</h3>
            <p class="mb-3">
              Add to your
              <code class="px-2 py-1 rounded">styles.css</code>:
            </p>
            <div class="p-4 bg-neutral-500/50 rounded-lg overflow-x-auto">
              <pre><code>&commat;import "tailwindcss";</code></pre>
            </div>
          </div>
        </div>
      </div>
    </mat-card>
  `,
})
export default class DQuickStart {}
