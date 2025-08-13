import {
  type BlockCard,
  type SectionData,
  type BlockData,
} from '@shared/interfaces';

const componentContent = [
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: \`<section class="py-24">
    <div class="container mx-auto px-4 max-w-md">
      <h2 class="text-3xl font-bold text-center mb-8">Sign In</h2>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput type="email" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput type="password" />
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">Login</button>
      </form>
    </div>
  </section>\`,
})
export default class Forms1 {}
`,
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: \`<section class="py-24">
    <div class="container mx-auto px-4 max-w-lg">
      <h2 class="text-3xl font-bold text-center mb-8">Create Account</h2>
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
          <mat-label>Password</mat-label>
          <input matInput type="password" />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Confirm Password</mat-label>
          <input matInput type="password" />
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">Sign Up</button>
      </form>
    </div>
  </section>\`,
})
export default class Forms2 {}
`,
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms3',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  template: \`<section class="py-24 bg-primary-50">
    <div class="container mx-auto px-4 max-w-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
      <p class="text-muted-foreground mb-8">Get the latest updates right in your inbox.</p>
      <form class="flex flex-col sm:flex-row gap-4 justify-center">
        <mat-form-field appearance="fill" class="flex-1">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="you@example.com" />
        </mat-form-field>
        <button mat-raised-button color="primary">Subscribe</button>
      </form>
    </div>
  </section>\`,
})
export default class Forms3 {}
`,
  `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'example-forms4',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  template: \`<section class="py-24">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-3xl font-bold text-center mb-8">Feedback</h2>
      <form class="grid gap-4">
        <mat-form-field appearance="fill">
          <mat-label>Rating</mat-label>
          <mat-select>
            <mat-option value="1">1</mat-option>
            <mat-option value="2">2</mat-option>
            <mat-option value="3">3</mat-option>
            <mat-option value="4">4</mat-option>
            <mat-option value="5">5</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Comments</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-full">Submit</button>
      </form>
    </div>
  </section>\`,
})
export default class Forms4 {}
`,
];

export const formsBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Login Form',
    description: 'Simple sign in form with email and password fields',
    previewUrl: 'blocks/form/form-1.webp',
    iframeUrl: '/examples/forms/1',
  },
  {
    id: '2',
    title: 'Registration Form',
    description: 'Form for creating a new account with name and password',
    previewUrl: 'blocks/form/form-2.webp',
    iframeUrl: '/examples/forms/2',
  },
  {
    id: '3',
    title: 'Newsletter Sign Up',
    description: 'Email subscription form with call to action',
    previewUrl: 'blocks/form/form-3.webp',
    iframeUrl: '/examples/forms/3',
  },
  {
    id: '4',
    title: 'Feedback Form',
    description: 'Collect user rating and comments',
    previewUrl: 'blocks/form/form-4.webp',
    iframeUrl: '/examples/forms/4',
  },
];

export const formsSectionData: SectionData = {
  title: 'UI Forms Collection',
  description: 'Common form patterns for user input and interactions.',
  path: 'forms',
  blocks: [...formsBlocks],
};

export const formsBlocksWithViews: BlockData[] = formsBlocks.map(
  (block, index) => {
    const codeTemplates: any = {
      '1': {
        template: `<section class="py-24">
  <div class="container mx-auto px-4 max-w-md">
    <h2 class="text-3xl font-bold text-center mb-8">Sign In</h2>
    <form class="grid gap-4">
      <mat-form-field appearance="fill">
        <mat-label>Email</mat-label>
        <input matInput type="email" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Password</mat-label>
        <input matInput type="password" />
      </mat-form-field>
      <button mat-raised-button color="primary" class="w-full">Login</button>
    </form>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './forms-1.component.html',
})
export class Forms1Component {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '2': {
        template: `<section class="py-24">
  <div class="container mx-auto px-4 max-w-lg">
    <h2 class="text-3xl font-bold text-center mb-8">Create Account</h2>
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
        <mat-label>Password</mat-label>
        <input matInput type="password" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Confirm Password</mat-label>
        <input matInput type="password" />
      </mat-form-field>
      <button mat-raised-button color="primary" class="w-full">Sign Up</button>
    </form>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './forms-2.component.html',
})
export class Forms2Component {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '3': {
        template: `<section class="py-24 bg-primary-50">
  <div class="container mx-auto px-4 max-w-2xl text-center">
    <h2 class="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
    <p class="text-muted-foreground mb-8">Get the latest updates right in your inbox.</p>
    <form class="flex flex-col sm:flex-row gap-4 justify-center">
      <mat-form-field appearance="fill" class="flex-1">
        <mat-label>Email</mat-label>
        <input matInput type="email" placeholder="you@example.com" />
      </mat-form-field>
      <button mat-raised-button color="primary">Subscribe</button>
    </form>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-forms3',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './forms-3.component.html',
})
export class Forms3Component {}`,
        styles: `/* Tailwind is used directly in template */`,
      },
      '4': {
        template: `<section class="py-24">
  <div class="container mx-auto px-4 max-w-xl">
    <h2 class="text-3xl font-bold text-center mb-8">Feedback</h2>
    <form class="grid gap-4">
      <mat-form-field appearance="fill">
        <mat-label>Rating</mat-label>
        <mat-select>
          <mat-option value="1">1</mat-option>
          <mat-option value="2">2</mat-option>
          <mat-option value="3">3</mat-option>
          <mat-option value="4">4</mat-option>
          <mat-option value="5">5</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Comments</mat-label>
        <textarea matInput rows="4"></textarea>
      </mat-form-field>
      <button mat-raised-button color="primary" class="w-full">Submit</button>
    </form>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'example-forms4',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './forms-4.component.html',
})
export class Forms4Component {}`,
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
    } as BlockData;
  }
);
