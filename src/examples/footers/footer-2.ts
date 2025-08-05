import { Component } from '@angular/core';

@Component({
  selector: 'example-footer-2',
  template: `<footer class="py-10 bg-gray-800 text-gray-300">
  <div class="container mx-auto px-4 grid sm:grid-cols-3 gap-8">
    <div>
      <h3 class="font-semibold mb-4">Company</h3>
      <ul class="space-y-2">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold mb-4">Support</h3>
      <ul class="space-y-2">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold mb-4">Contact</h3>
      <ul class="space-y-2">
        <li><a href="#">Email</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="mt-8 text-center text-sm text-gray-500">&copy; 2024 Acme Inc.</div>
</footer>`,
})
export default class Footer2 {}
