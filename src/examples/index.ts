import { Component } from '@angular/core';
import Hero1 from './heroes/hero-1';

@Component({
  selector: 'app-examples',
  imports: [Hero1],
  template: ` <example-hero1 /> `,
})
export default class Examples {}
