import { Component } from '@angular/core';

@Component({
  selector: 'example-stats-1',
  standalone: true,
  template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold">120K</div>
        <p class="text-gray-600 dark:text-gray-300">Users</p>
      </div>
      <div>
        <div class="text-4xl font-bold">24/7</div>
        <p class="text-gray-600 dark:text-gray-300">Support</p>
      </div>
      <div>
        <div class="text-4xl font-bold">99.9%</div>
        <p class="text-gray-600 dark:text-gray-300">Uptime</p>
      </div>
      <div>
        <div class="text-4xl font-bold">500+</div>
        <p class="text-gray-600 dark:text-gray-300">Components</p>
      </div>
    </div>
  </div>
</section>`,
})
export default class Stats1 {}
