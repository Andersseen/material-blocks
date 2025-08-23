const CONTENT = [
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-contact1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: \`<section class="py-24">
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
  </section>\`,
})
export default class Contact1 {}`,
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: \`<section class="py-24">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
          <p class="text-muted-foreground">
            We'd love to hear from you. Reach us through any of the following
            ways or send us a message.
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
  </section>\`,
})
export default class Contact2 {}`,
  `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact3',
  standalone: true,
  imports: [MatIconModule],
  template: \`<section class="py-24">
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
  </section>\`,
})
export default class Contact3 {}`,
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-contact4',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`<section class="py-24">
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
  </section>\`,
})
export default class Contact4 {}`,
];

export default CONTENT;
