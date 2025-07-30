import { Component } from '@angular/core';
import { ComponentsUsage } from './components-usage';
import Customization from './customization';
import Help from './help';
import QuickStart from './quick-start';

@Component({
  selector: 'app-docs',
  imports: [QuickStart, ComponentsUsage, Customization, Help],
  template: `
    <div>
      <div
        class="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center sm:items-stretch"
      >
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Documentation</h1>
          <p class="text-xl">
            Everything you need to know to get started with our block library
          </p>
        </div>

        <!-- Quick Start -->
        <quick-start />
        <!-- Component Usage -->
        <components-usage />
        <!-- Customization -->
        <customization />

        <!-- Help -->
        <help />
      </div>
    </div>
  `,
})
export default class Docs {}
