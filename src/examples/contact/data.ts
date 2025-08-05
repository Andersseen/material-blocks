import { BlockCard, SectionData, BlockData } from '@shared/interfaces';

export const contactBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Simple Contact Form',
    description: 'Basic form with name, email and message fields',
    previewUrl: 'https://placehold.co/600x400?text=Contact+Form',
    iframeUrl: '/examples/contact/1',
  },
  {
    id: '2',
    title: 'Contact Info with Form',
    description: 'Two-column layout with contact details and form',
    previewUrl: 'https://placehold.co/600x400?text=Contact+Info',
    iframeUrl: '/examples/contact/2',
  },
  {
    id: '3',
    title: 'Map with Contact Details',
    description: 'Display office location alongside contact information',
    previewUrl: 'https://placehold.co/600x400?text=Map+Contact',
    iframeUrl: '/examples/contact/3',
  },
  {
    id: '4',
    title: 'Support Options',
    description: 'Cards with multiple support channels',
    previewUrl: 'https://placehold.co/600x400?text=Support+Cards',
    iframeUrl: '/examples/contact/4',
  },
];

export const contactSectionData: SectionData = {
  title: 'UI Contact Collection',
  description: 'Reach out to users with these contact forms and info sections.',
  path: 'contact',
  blocks: [...contactBlocks],
};

export const contactBlocksWithViews: BlockData[] = contactBlocks.map((block) => {
  const codeTemplates: any = {
    '1': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4 max-w-xl">
    <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
    <form class="grid gap-4">
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput placeholder="Your name" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Email</mat-label>
        <input matInput type="email" placeholder="you@example.com" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Message</mat-label>
        <textarea matInput rows="4"></textarea>
      </mat-form-field>
      <button mat-raised-button color="primary" class="w-full">
        Send Message
      </button>
    </form>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-contact1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact-1.component.html',
})
export class Contact1Component {}`,
      styles: ``,
    },
    '2': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid gap-8 md:grid-cols-2">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
        <p class="text-muted-foreground">
          We'd love to hear from you. Reach us through any of the
          following ways or send us a message.
        </p>
        <div class="flex items-center gap-3">
          <mat-icon>phone</mat-icon>
          <span>+1 (555) 123-4567</span>
        </div>
        <div class="flex items-center gap-3">
          <mat-icon>mail</mat-icon>
          <span>support@example.com</span>
        </div>
        <div class="flex items-center gap-3">
          <mat-icon>place</mat-icon>
          <span>123 Main St, City</span>
        </div>
      </div>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput type="email" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Message</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full md:w-auto">
          Send
        </button>
      </form>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './contact-2.component.html',
})
export class Contact2Component {}`,
      styles: ``,
    },
    '3': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="grid gap-8 md:grid-cols-2 items-start">
      <div class="rounded-md overflow-hidden shadow">
        <img
          src="https://placehold.co/600x400?text=Map"
          alt="Map"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="space-y-4">
        <h2 class="text-3xl font-bold">Our Office</h2>
        <p class="text-muted-foreground">
          Stop by our office or send us a message anytime.
        </p>
        <div class="flex items-center gap-3">
          <mat-icon>place</mat-icon>
          <span>123 Main St, City</span>
        </div>
        <div class="flex items-center gap-3">
          <mat-icon>phone</mat-icon>
          <span>+1 (555) 123-4567</span>
        </div>
        <div class="flex items-center gap-3">
          <mat-icon>mail</mat-icon>
          <span>info@example.com</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact3',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact-3.component.html',
})
export class Contact3Component {}`,
      styles: ``,
    },
    '4': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Need Help?</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <mat-card class="p-6 text-center">
        <mat-icon class="mb-4 text-4xl text-primary-600">mail</mat-icon>
        <h3 class="text-xl font-semibold mb-2">Email</h3>
        <p class="text-muted-foreground mb-4">support@example.com</p>
        <button mat-stroked-button color="primary">Send Email</button>
      </mat-card>
      <mat-card class="p-6 text-center">
        <mat-icon class="mb-4 text-4xl text-primary-600">phone</mat-icon>
        <h3 class="text-xl font-semibold mb-2">Phone</h3>
        <p class="text-muted-foreground mb-4">+1 (555) 123-4567</p>
        <button mat-stroked-button color="primary">Call Now</button>
      </mat-card>
      <mat-card class="p-6 text-center">
        <mat-icon class="mb-4 text-4xl text-primary-600">chat</mat-icon>
        <h3 class="text-xl font-semibold mb-2">Live Chat</h3>
        <p class="text-muted-foreground mb-4">Chat with our team</p>
        <button mat-stroked-button color="primary">Start Chat</button>
      </mat-card>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact4',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './contact-4.component.html',
})
export class Contact4Component {}`,
      styles: ``,
    },
  };

  return {
    ...block,
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
        language: 'scss',
      },
    ],
  } as BlockData;
});
