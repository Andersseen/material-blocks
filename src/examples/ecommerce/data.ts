import { type BlockData, type BlockCard } from '@shared/interfaces';
import ecommerce1 from './ecommerce-1.ts?raw';
import ecommerce2 from './ecommerce-2.ts?raw';
import ecommerce3 from './ecommerce-3.ts?raw';
import ecommerce4 from './ecommerce-4.ts?raw';

const componentContent = [ecommerce1, ecommerce2, ecommerce3, ecommerce4];

export const ecommerceBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Product Grid',
    description: 'Responsive product card grid for storefronts',
    previewUrl: 'https://placehold.co/600x400?text=Product+Grid',
    iframeUrl: '/examples/ecommerce/1',
  },
  {
    id: '2',
    title: 'Product Showcase',
    description: 'Featured product layout with actions',
    previewUrl: 'https://placehold.co/600x400?text=Product+Showcase',
    iframeUrl: '/examples/ecommerce/2',
  },
  {
    id: '3',
    title: 'Cart Summary',
    description: 'Shopping cart summary with totals',
    previewUrl: 'https://placehold.co/600x400?text=Cart+Summary',
    iframeUrl: '/examples/ecommerce/3',
  },
  {
    id: '4',
    title: 'Checkout Summary',
    description: 'Checkout form with order summary',
    previewUrl: 'https://placehold.co/600x400?text=Checkout+Summary',
    iframeUrl: '/examples/ecommerce/4',
  },
];

export const ecommerceSectionsData = {
  title: 'UI Ecommerce Collection',
  description: 'Product displays, cart interfaces and checkout layouts.',
  path: 'ecommerce',
  blocks: [...ecommerceBlocks],
};

export const ecommerceBlocksWithViews: BlockData[] = ecommerceBlocks.map((block, index) => {
  const codeTemplates: any = {
    '1': {
      template: '<example-ecommerce-1></example-ecommerce-1>',
      component: '',
      styles: '',
    },
    '2': {
      template: '<example-ecommerce-2></example-ecommerce-2>',
      component: '',
      styles: '',
    },
    '3': {
      template: '<example-ecommerce-3></example-ecommerce-3>',
      component: '',
      styles: '',
    },
    '4': {
      template: '<example-ecommerce-4></example-ecommerce-4>',
      component: '',
      styles: '',
    },
  };
  return {
    ...block,
    content: componentContent[index],
    views: [
      { label: 'Template', content: codeTemplates[block.id].template, language: 'html' },
      { label: 'Component', content: codeTemplates[block.id].component, language: 'typescript' },
      { label: 'Styles', content: codeTemplates[block.id].styles, language: 'css' },
    ],
  };
});
