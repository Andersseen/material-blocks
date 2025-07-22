import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="border-t border-foreground/20 mt-24">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="text-center">
          <p>Built with ❤️ using Angular, Material Design, and Tailwind CSS</p>
          <p class="text-sm mt-2">
            Copy-paste ready components for modern web applications
          </p>
        </div>
      </div>
    </footer>
  `,
})
export default class Footer {}
