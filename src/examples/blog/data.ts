import { type BlockCard, type SectionData, type BlockData } from '@shared/interfaces';

const componentContent = [
`import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: \`<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 1" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">First Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the first post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 2" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Second Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the second post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 3" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Third Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the third post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>\`,
})
export default class Blog1 {}
`,
`import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: \`<section class="py-24">
  <div class="container mx-auto px-4 space-y-6">
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post One</h3>
        <p class="text-muted-foreground mb-4">Short intro to the first post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Two</h3>
        <p class="text-muted-foreground mb-4">Short intro to the second post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Three</h3>
        <p class="text-muted-foreground mb-4">Short intro to the third post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>\`,
})
export default class Blog2 {}
`,
`import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-3',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: \`<section class="py-24">
  <div class="container mx-auto px-4 space-y-8">
    <mat-card class="overflow-hidden">
      <img src="https://placehold.co/800x300" alt="featured" class="w-full h-48 object-cover">
      <mat-card-content>
        <h2 class="text-2xl font-bold mb-2">Featured Post</h2>
        <p class="text-muted-foreground mb-4">Highlight an important article with a larger card.</p>
        <button mat-raised-button color="primary">Read Article</button>
      </mat-card-content>
    </mat-card>
    <div class="grid md:grid-cols-2 gap-6">
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post One</h3>
        <p class="text-muted-foreground mb-4">A supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post Two</h3>
        <p class="text-muted-foreground mb-4">Another supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
  </div>
</section>\`,
})
export default class Blog3 {}
`,
`import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-blog-4',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule],
  template: \`<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <div class="md:col-span-2 space-y-6">
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post One</h3>
        <p class="text-muted-foreground mb-4">Summary of the first main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post Two</h3>
        <p class="text-muted-foreground mb-4">Summary of the second main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
    <aside class="space-y-4">
      <h4 class="font-semibold">Categories</h4>
      <mat-nav-list>
        <a mat-list-item href="#">Design</a>
        <a mat-list-item href="#">Development</a>
        <a mat-list-item href="#">Tutorials</a>
      </mat-nav-list>
    </aside>
  </div>
</section>\`,
})
export default class Blog4 {}
`
];

export const blogBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Blog Cards Grid',
    description: 'Three column grid of blog posts with images',
    previewUrl: 'https://placehold.co/600x400?text=Blog+Grid',
    iframeUrl: '/examples/blog/1',
  },
  {
    id: '2',
    title: 'Blog List',
    description: 'Vertical list of blog posts with thumbnails',
    previewUrl: 'https://placehold.co/600x400?text=Blog+List',
    iframeUrl: '/examples/blog/2',
  },
  {
    id: '3',
    title: 'Featured Blog Post',
    description: 'Highlighted article with supporting posts',
    previewUrl: 'https://placehold.co/600x400?text=Featured+Post',
    iframeUrl: '/examples/blog/3',
  },
  {
    id: '4',
    title: 'Blog with Sidebar',
    description: 'Layout with article list and sidebar categories',
    previewUrl: 'https://placehold.co/600x400?text=Blog+Sidebar',
    iframeUrl: '/examples/blog/4',
  },
];

export const blogSectionData: SectionData = {
  title: 'UI Blog Collection',
  description: 'Display articles and news with these blog layouts.',
  path: 'blog',
  blocks: [...blogBlocks],
};

export const blogBlocksWithViews: BlockData[] = blogBlocks.map(
  (block, index) => {
    const codeTemplates: any = {
    '1': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 1" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">First Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the first post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 2" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Second Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the second post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col">
      <img src="https://placehold.co/600x400" alt="Blog post 3" class="h-40 w-full object-cover rounded-t-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Third Post</h3>
        <p class="text-muted-foreground mb-4">Brief description of the third post.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-grid',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blog-grid.component.html',
})
export class BlogGridComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '2': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4 space-y-6">
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post One</h3>
        <p class="text-muted-foreground mb-4">Short intro to the first post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Two</h3>
        <p class="text-muted-foreground mb-4">Short intro to the second post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
    <mat-card class="flex flex-col sm:flex-row gap-4">
      <img src="https://placehold.co/200x150" alt="thumb" class="w-full sm:w-48 h-32 object-cover rounded-md" />
      <mat-card-content class="flex-1">
        <h3 class="text-xl font-bold mb-2">Post Three</h3>
        <p class="text-muted-foreground mb-4">Short intro to the third post.</p>
        <button mat-button color="primary">Read More</button>
      </mat-card-content>
    </mat-card>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '3': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4 space-y-8">
    <mat-card class="overflow-hidden">
      <img src="https://placehold.co/800x300" alt="featured" class="w-full h-48 object-cover">
      <mat-card-content>
        <h2 class="text-2xl font-bold mb-2">Featured Post</h2>
        <p class="text-muted-foreground mb-4">Highlight an important article with a larger card.</p>
        <button mat-raised-button color="primary">Read Article</button>
      </mat-card-content>
    </mat-card>
    <div class="grid md:grid-cols-2 gap-6">
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post One</h3>
        <p class="text-muted-foreground mb-4">A supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-lg font-bold mb-2">Secondary Post Two</h3>
        <p class="text-muted-foreground mb-4">Another supporting article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-featured',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blog-featured.component.html',
})
export class BlogFeaturedComponent {}`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '4': {
      template: `<section class="py-24">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-3">
    <div class="md:col-span-2 space-y-6">
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post One</h3>
        <p class="text-muted-foreground mb-4">Summary of the first main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
      <mat-card>
        <h3 class="text-xl font-bold mb-2">Main Post Two</h3>
        <p class="text-muted-foreground mb-4">Summary of the second main article.</p>
        <button mat-stroked-button color="primary">Read More</button>
      </mat-card>
    </div>
    <aside class="space-y-4">
      <h4 class="font-semibold">Categories</h4>
      <mat-nav-list>
        <a mat-list-item href="#">Design</a>
        <a mat-list-item href="#">Development</a>
        <a mat-list-item href="#">Tutorials</a>
      </mat-nav-list>
    </aside>
  </div>
</section>`,
      component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './blog-sidebar.component.html',
})
export class BlogSidebarComponent {}`,
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
  }
);
