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
