import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [RouterOutlet],

  template: ` <router-outlet /> `,
})
export default class Container {}
