import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-pricing3',
  imports: [MatIcon],
  template: `
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Compare Plans</h2>
          <p class="text-lg">Feature breakdown by plan</p>
        </div>

        <div class="overflow-auto">
          <table class="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th class="p-4 font-semibold">Feature</th>
                <th class="p-4 font-semibold">Basic</th>
                <th class="p-4 font-semibold">Pro</th>
                <th class="p-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              @for (feature of features; track $index) {
              <tr class="border-t">
                <td class="p-4">{{ feature.name }}</td>
                <td class="p-4 text-center">
                  @if (feature.basic) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.pro) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
                <td class="p-4 text-center">
                  @if (feature.enterprise) {
                  <mat-icon>check</mat-icon>
                  }
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
})
export default class Pricing3 {
  features = [
    { name: 'Access to components', basic: true, pro: true, enterprise: true },
    { name: 'Support', basic: true, pro: true, enterprise: true },
    { name: 'Team management', basic: false, pro: true, enterprise: true },
    { name: 'Custom branding', basic: false, pro: false, enterprise: true },
  ];
}
