import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Layout from './layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  template: `
    <app-layout>
      <main>
        <router-outlet />
      </main>
    </app-layout>
  `,
})
export default class App {}
