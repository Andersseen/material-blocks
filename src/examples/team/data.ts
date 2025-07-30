import { type BlockData, type BlockCard } from '@shared/interfaces';

export const teamBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Team Grid',
    description:
      'Simple grid of four members with avatars, roles and social icons',
    previewUrl: 'https://placehold.co/600x400?text=Team+Grid',
    iframeUrl: '/examples/team/1',
  },
  {
    id: '2',
    title: 'Overlay Cards',
    description:
      'Image cards with an overlay showing name, role and social icons on hover',
    previewUrl: 'https://placehold.co/600x400?text=Overlay+Cards',
    iframeUrl: '/examples/team/2',
  },
  {
    id: '3',
    title: 'Detailed Cards',
    description: 'Two‑column cards with image, biography and social links',
    previewUrl: 'https://placehold.co/600x400?text=Detailed+Cards',
    iframeUrl: '/examples/team/3',
  },
  {
    id: '4',
    title: 'Split Layout',
    description: 'Mixed layout with intro text and a 2×2 grid of team members',
    previewUrl: 'https://placehold.co/600x400?text=Split+Layout',
    iframeUrl: '/examples/team/4',
  },
];

export const teamSectionsData = {
  title: 'UI Team Blocks Collection',
  description: 'Different layouts to showcase your team members',
  path: 'team',
  blocks: [...teamBlocks],
};

// Optional: include code snippets for documentation purposes.
export const teamBlocksWithViews: BlockData[] = teamBlocks.map((block) => {
  const codeTemplates: any = {
    '1': {
      template: '<example-team1></example-team1>',
      component: '', // components are in separate files
      styles: '',
    },
    '2': {
      template: '<example-team2></example-team2>',
      component: '',
      styles: '',
    },
    '3': {
      template: '<example-team3></example-team3>',
      component: '',
      styles: '',
    },
    '4': {
      template: '<example-team4></example-team4>',
      component: '',
      styles: '',
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
  };
});
