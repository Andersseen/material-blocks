import { BlockCard, BlockData, SectionData } from '@shared/interfaces';

export const navigationBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Basic Navbar',
    description: 'Simple top navigation bar with links',
    previewUrl: 'https://placehold.co/600x400?text=Navbar+1',
    iframeUrl: '/examples/navigation/1',
  },
  {
    id: '2',
    title: 'Responsive Navbar',
    description: 'Navbar with mobile menu and sign up button',
    previewUrl: 'https://placehold.co/600x400?text=Navbar+2',
    iframeUrl: '/examples/navigation/2',
  },
  {
    id: '3',
    title: 'Sidebar Navigation',
    description: 'Dashboard layout with persistent sidebar',
    previewUrl: 'https://placehold.co/600x400?text=Sidebar',
    iframeUrl: '/examples/navigation/3',
  },
  {
    id: '4',
    title: 'Breadcrumb',
    description: 'Breadcrumb navigation for hierarchical pages',
    previewUrl: 'https://placehold.co/600x400?text=Breadcrumb',
    iframeUrl: '/examples/navigation/4',
  },
];

export const navigationSectionData: SectionData = {
  title: 'UI Navigation Collection',
  description: 'Navigation bars, side menus, and breadcrumb components.',
  path: 'navigation',
  blocks: [...navigationBlocks],
};

export const navigationBlocksWithViews: BlockData[] = navigationBlocks.map((block) => {
  const codeTemplates: any = {
    '1': {
      template: `<mat-toolbar class=\"bg-primary-600 text-white\">
  <div class=\"container mx-auto flex justify-between items-center\">
    <span class=\"text-xl font-bold\">Brand</span>
    <nav class=\"flex items-center gap-4\">
      <a mat-button>Home</a>
      <a mat-button>Features</a>
      <a mat-button>Pricing</a>
    </nav>
  </div>
</mat-toolbar>`,
      component: `import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'example-navigation1',
  standalone: true,
  imports: [MatToolbar, MatButton],
  templateUrl: './navigation-1.component.html',
})
export class Navigation1Component {}`,
      styles: ``,
    },
    '2': {
      template: `<mat-toolbar class=\"bg-white dark:bg-gray-900\">
  <div class=\"container mx-auto flex justify-between items-center\">
    <button mat-icon-button class=\"md:hidden\">
      <mat-icon>menu</mat-icon>
    </button>
    <a class=\"text-xl font-bold\">Brand</a>
    <nav class=\"hidden md:flex items-center gap-4\">
      <a mat-button>Docs</a>
      <a mat-button>Blog</a>
      <a mat-button>Contact</a>
    </nav>
    <button mat-raised-button color=\"primary\" class=\"hidden md:block\">
      Sign Up
    </button>
  </div>
</mat-toolbar>`,
      component: `import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation2',
  standalone: true,
  imports: [MatToolbar, MatButton, MatIconButton, MatIcon],
  templateUrl: './navigation-2.component.html',
})
export class Navigation2Component {}`,
      styles: ``,
    },
    '3': {
      template: `<mat-sidenav-container class=\"h-64 border rounded\">
  <mat-sidenav mode=\"side\" opened class=\"w-64 p-4\">
    <mat-nav-list>
      <a mat-list-item href=\"#\">
        <mat-icon matListItemIcon>home</mat-icon>
        <span matListItemTitle>Dashboard</span>
      </a>
      <a mat-list-item href=\"#\">
        <mat-icon matListItemIcon>person</mat-icon>
        <span matListItemTitle>Profile</span>
      </a>
      <a mat-list-item href=\"#\">
        <mat-icon matListItemIcon>settings</mat-icon>
        <span matListItemTitle>Settings</span>
      </a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content class=\"p-4\">
    <h2 class=\"text-2xl font-bold mb-2\">Content Area</h2>
    <p>Add your main content here.</p>
  </mat-sidenav-content>
</mat-sidenav-container>`,
      component: `import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation3',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIcon],
  templateUrl: './navigation-3.component.html',
})
export class Navigation3Component {}`,
      styles: ``,
    },
    '4': {
      template: `<nav class=\"flex items-center text-sm text-gray-600 dark:text-gray-300\" aria-label=\"Breadcrumb\">
  <a class=\"hover:underline\" href=\"#\">Home</a>
  <mat-icon class=\"mx-2 text-base\">chevron_right</mat-icon>
  <a class=\"hover:underline\" href=\"#\">Library</a>
  <mat-icon class=\"mx-2 text-base\">chevron_right</mat-icon>
  <span class=\"text-gray-800 dark:text-white\">Data</span>
</nav>`,
      component: `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation4',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './navigation-4.component.html',
})
export class Navigation4Component {}`,
      styles: ``,
    },
  };

  return {
    ...block,
    views: [
      { label: 'Template', content: codeTemplates[block.id].template, language: 'html' },
      { label: 'Component', content: codeTemplates[block.id].component, language: 'typescript' },
      { label: 'Styles', content: codeTemplates[block.id].styles, language: 'scss' },
    ],
  } as BlockData;
});
