import { BlockCard } from '@shared/interfaces';

// Features Section
export const featureBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Feature Grid',
    description: 'Responsive grid layout showcasing key features with icons',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Grid',
  },
  {
    id: '2',
    title: 'Feature Tabs',
    description: 'Interactive tabs to display different feature sets',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Tabs',
  },
  {
    id: '3',
    title: 'Comparison Table',
    description: 'Side-by-side feature comparison between plans',
    previewUrl: 'https://placehold.co/600x400?text=Comparison+Table',
  },
  {
    id: '4',
    title: 'Feature Carousel',
    description: 'Animated carousel to highlight product features',
    previewUrl: 'https://placehold.co/600x400?text=Feature+Carousel',
  },
];

export const featuresSectionData = {
  title: 'UI Features Collection',
  description:
    'Effective ways to showcase your product features and capabilities.',
  blocks: [...featureBlocks],
};

// Pricing Section
export const pricingBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Three-Tier Pricing',
    description: 'Classic pricing cards with three different plan options',
    previewUrl: 'https://placehold.co/600x400?text=Three-Tier+Pricing',
  },
  {
    id: '2',
    title: 'Toggle Pricing',
    description: 'Monthly/Annual toggle with dynamic price updates',
    previewUrl: 'https://placehold.co/600x400?text=Toggle+Pricing',
  },
  {
    id: '3',
    title: 'Enterprise Pricing',
    description: 'Custom pricing section for enterprise solutions',
    previewUrl: 'https://placehold.co/600x400?text=Enterprise+Pricing',
  },
  {
    id: '4',
    title: 'Pricing with Feature Matrix',
    description: 'Detailed pricing with feature comparison matrix',
    previewUrl: 'https://placehold.co/600x400?text=Pricing+Matrix',
  },
];

export const pricingSectionData = {
  title: 'UI Pricing Collection',
  description: 'Convert visitors with clear, attractive pricing sections.',
  blocks: [...pricingBlocks],
};
