import { type BlockCard } from '../../../shared/interfaces';

export interface BlockView {
  label: string;
  content: string;
  language?: string;
}

export interface BlockData {
  title: string;
  description: string;
  tags?: string[];
  views: BlockView[];
  previewUrl?: string;
}

export const heroBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Modern Hero Section',
    description:
      'Clean design with call-to-action button and gradient background',
    previewUrl: 'https://placehold.co/600x400?text=Modern+Hero',
  },
  {
    id: '2',
    title: 'Product Hero',
    description: 'Showcase your product with image and feature highlights',
    previewUrl: 'https://placehold.co/600x400?text=Product+Hero',
  },
  {
    id: '3',
    title: 'Minimal Hero',
    description: 'Typography-focused with subtle animations',
    previewUrl: 'https://placehold.co/600x400?text=Minimal+Hero',
  },
  {
    id: '4',
    title: 'Video Background Hero',
    description: 'Full-screen video background with overlay content',
    previewUrl: 'https://placehold.co/600x400?text=Video+Hero',
  },
];

export const heroesSectionData = {
  title: 'UI Heroes Collection',
  description:
    'Eye-catching landing page headers with CTAs, background images, and compelling content.',
  blocks: [...heroBlocks],
};

export type ViewMode = 'code' | 'preview';
export const blockData: BlockData = {
  title: 'Example Block',
  description:
    'An example component that shows different code views with copy functionality.',
  tags: ['Angular', 'Material', 'Tailwind'],
  previewUrl: 'https://example.com/preview',
  views: [
    {
      label: 'Template',
      content: `<div class="example-container">
  <h2>Component Title</h2>
  <p>Component description</p>
  <button mat-raised-button color="primary">
    Primary Action
  </button>
</div>`,
      language: 'html',
    },
    {
      label: 'Component',
      content: `@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  title = 'My Component';
  
  onAction() {
    console.log('Action executed');
  }
}`,
      language: 'typescript',
    },
    {
      label: 'Styles',
      content: `.example-container {
  @apply p-6 bg-white rounded-lg shadow-md;
  
  h2 {
    @apply text-2xl font-bold mb-4 text-gray-800;
  }
  
  p {
    @apply text-gray-600 mb-6;
  }
}`,
      language: 'scss',
    },
  ],
};
