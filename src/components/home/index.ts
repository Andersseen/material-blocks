import { Component } from '@angular/core';
import Hero from './hero';
import Features from './features';

@Component({
  selector: 'app-home',
  imports: [Hero, Features],
  template: `
    <!-- Hero Section -->
    <hero />
    <!-- Features Section -->
    <features />
  `,
})
export default class Home {}
