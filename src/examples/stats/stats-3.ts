import { Component } from '@angular/core';

@Component({
  selector: 'example-stats-3',
  standalone: true,
  template: `<section class="py-24 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 text-center">
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">80+</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Projects</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">200K</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Downloads</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">500</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Contributors</p>
      </div>
      <div class="py-6">
        <div class="text-3xl font-bold text-primary-600">8 yrs</div>
        <p class="mt-1 text-gray-600 dark:text-gray-300">Experience</p>
      </div>
    </div>
  </div>
</section>`,
})
export default class Stats3 {}
