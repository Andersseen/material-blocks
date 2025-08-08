import { type BlockData, type BlockCard, type SectionData } from '@shared/interfaces';
import footer1 from './footer-1.ts?raw';
import footer2 from './footer-2.ts?raw';
import footer3 from './footer-3.ts?raw';
import footer4 from './footer-4.ts?raw';

const componentContent = [footer1, footer2, footer3, footer4];

export const footerBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Simple Footer',
    description: 'Centered text and icons for basic projects',
    previewUrl: 'https://placehold.co/600x400?text=Simple+Footer',
    iframeUrl: '/examples/footer/1',
  },
  {
    id: '2',
    title: 'Links Footer',
    description: 'Three-column layout with navigation links',
    previewUrl: 'https://placehold.co/600x400?text=Links+Footer',
    iframeUrl: '/examples/footer/2',
  },
  {
    id: '3',
    title: 'Newsletter Footer',
    description: 'Footer with email subscription form',
    previewUrl: 'https://placehold.co/600x400?text=Newsletter+Footer',
    iframeUrl: '/examples/footer/3',
  },
  {
    id: '4',
    title: 'Navigation Footer',
    description: 'Footer with logo and navigation menu',
    previewUrl: 'https://placehold.co/600x400?text=Navigation+Footer',
    iframeUrl: '/examples/footer/4',
  },
];

export const footerSectionData: SectionData = {
  title: 'UI Footer Collection',
  description: 'Website footers with links, forms and social icons.',
  path: 'footers',
  blocks: [...footerBlocks],
};

export const footerBlocksWithViews: BlockData[] = footerBlocks.map((block, index) => {
  const codeTemplates: any = {
    '1': {
      template: `<footer class="py-8 bg-gray-100 dark:bg-gray-900">
  <div class="container mx-auto text-center space-y-4">
    <div class="flex justify-center gap-6">
      <mat-icon>home</mat-icon>
      <mat-icon>mail</mat-icon>
      <mat-icon>favorite</mat-icon>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">&copy; 2024 Acme Inc.</p>
  </div>
</footer>`,
      component: `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer-simple',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './footer-simple.component.html',
})
export class FooterSimpleComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '2': {
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
      component: `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  templateUrl: './footer-links.component.html',
})
export class FooterLinksComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '3': {
      template: `<footer class="py-16 bg-gray-100 dark:bg-gray-800">
  <div class="container mx-auto text-center">
    <h2 class="text-2xl font-bold mb-4">Stay in touch</h2>
    <p class="text-gray-600 mb-6">Join our newsletter</p>
    <form class="max-w-md mx-auto flex gap-2">
      <mat-form-field appearance="outline" class="flex-1">
        <mat-label>Email</mat-label>
        <input matInput type="email" />
      </mat-form-field>
      <button mat-raised-button color="primary">Subscribe</button>
    </form>
    <p class="mt-8 text-sm text-gray-500">&copy; 2024 Acme Inc.</p>
  </div>
</footer>`,
      component: `import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-footer-newsletter',
  standalone: true,
  imports: [MatFormField, MatInput, MatButton],
  templateUrl: './footer-newsletter.component.html',
})
export class FooterNewsletterComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '4': {
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
      component: `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  templateUrl: './footer-nav.component.html',
})
export class FooterNavComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
  };

  return {
    ...block,
    content: componentContent[index],
    views: [
      {
        label: 'Template',
        content: codeTemplates[block.id].template,
        language: 'html',
      },
      {
        label: 'Component',
        content: codeTemplates[block.id].component,
        language: 'typescript',
      },
      {
        label: 'Styles',
        content: codeTemplates[block.id].styles,
        language: 'css',
      },
    ],
  };
});
