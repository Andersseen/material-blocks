import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Footer from '@components/footer';
import Navbar from '@components/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <div class="min-h-screen  transition-colors duration-300">
      <!-- Navigation -->
      <app-navbar />

      <!-- Main Content -->
      <main class="relative">
        <router-outlet />
      </main>

      <!-- Footer -->
      <app-footer />
    </div>
  `,
})
export default class App {}
