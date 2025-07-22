import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="border-t border-gray-200 dark:border-gray-700 mt-24">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Built with ❤️ using Angular, Material Design, and Tailwind CSS
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Copy-paste ready components for modern web applications
          </p>
        </div>
      </div>
    </footer>
  `,
})
export default class Footer {}
