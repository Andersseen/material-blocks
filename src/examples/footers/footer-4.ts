import { Component } from '@angular/core';

@Component({
  selector: 'example-footer-4',
  template: `<footer class="py-10 bg-gray-900 text-gray-300">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
    <div class="text-lg font-bold">Acme</div>
    <nav class="flex gap-6">
      <a href="#" class="hover:text-white">Home</a>
      <a href="#" class="hover:text-white">Features</a>
      <a href="#" class="hover:text-white">Contact</a>
    </nav>
    <div class="text-sm">&copy; 2024 Acme Inc.</div>
  </div>
</footer>`,
})
export default class Footer4 {}
