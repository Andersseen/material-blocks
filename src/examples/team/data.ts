import { type BlockData, type BlockCard, type SectionData } from '@shared/interfaces';
import team1 from './team-1.ts?raw';
import team2 from './team-2.ts?raw';
import team3 from './team-3.ts?raw';
import team4 from './team-4.ts?raw';

const componentContent = [team1, team2, team3, team4];

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
export const teamBlocksWithViews: BlockData[] = teamBlocks.map((block, index) => {
  const codeTemplates: any = {
    '1': {
      template: `<section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
          <p class="text-muted-foreground">{{ sectionDescription }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-4">
          @for (member of teamMembers; track member.id) {
          <div class="flex flex-col items-center text-center">
            <img
              [src]="member.avatar"
              [alt]="member.name"
              class="w-32 h-32 rounded-full mb-4 object-cover shadow-lg"
            />
            <h5 class="text-xl font-semibold">{{ member.name }}</h5>
            <p class="text-sm text-primary mb-3">{{ member.role }}</p>
            <div class="flex gap-4">
              @for (social of member.socials; track $index) {
              <a [href]="social.link" target="_blank" rel="noopener noreferrer">
                <mat-icon>{{ social.icon }}</mat-icon>
              </a>
              }
            </div>
          </div>
          }
        </div>
      </div>
    </section>`,
      component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-team1',
  templateUrl: 'template.html',
  imports: [MatIconModule],
})
export default class ExampleTeam1Component {
  // Titles for the section
public  sectionTitle = 'Our Team';
public sectionDescription = 'Meet the people behind our success';

  // Team member data
public  teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/team/alice.jpg',
      socials: [
        { icon: 'linkedin', link: '#' },
        { icon: 'twitter', link: '#' },
      ],
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Chief Technology Officer',
      avatar: '/assets/images/team/bob.jpg',
      socials: [
        { icon: 'github', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 3,
      name: 'Clara Davis',
      role: 'Lead Designer',
      avatar: '/assets/images/team/clara.jpg',
      socials: [
        { icon: 'dribbble', link: '#' },
        { icon: 'instagram', link: '#' },
      ],
    },
    {
      id: 4,
      name: 'Daniel Lee',
      role: 'Head of Marketing',
      avatar: '/assets/images/team/daniel.jpg',
      socials: [
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
  ];
}
`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '2': {
      template: `<section class="py-24 bg-gray-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
          <p class="text-muted-foreground">{{ sectionDescription }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-4">
          @for (member of teamMembers; track member.id) {
          <div class="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              [src]="member.avatar"
              [alt]="member.name"
              class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-white">
              <h5 class="text-lg font-semibold">{{ member.name }}</h5>
              <p class="text-sm">{{ member.role }}</p>
              <div
                class="flex gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                @for (social of member.socials; track $index) {
                <a
                  [href]="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <mat-icon>{{ social.icon }}</mat-icon>
                </a>
                }
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>`,
      component: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-team2',
  templateUrl: 'template.html',
  imports: [MatIconModule],
})
export default class ExampleTeam2Component {
  sectionTitle = 'Meet Our Experts';
  sectionDescription =
    'A diverse team passionate about building great products';

  teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/team/alice.jpg',
      socials: [
        { icon: 'linkedin', link: '#' },
        { icon: 'twitter', link: '#' },
      ],
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Chief Technology Officer',
      avatar: '/assets/images/team/bob.jpg',
      socials: [
        { icon: 'github', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 3,
      name: 'Clara Davis',
      role: 'Lead Designer',
      avatar: '/assets/images/team/clara.jpg',
      socials: [
        { icon: 'dribbble', link: '#' },
        { icon: 'instagram', link: '#' },
      ],
    },
    {
      id: 4,
      name: 'Daniel Lee',
      role: 'Head of Marketing',
      avatar: '/assets/images/team/daniel.jpg',
      socials: [
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
  ];
}
`,
      styles: `/* Tailwind is used directly in template */`,
    },
    '3': {
      template: ` <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-3xl font-bold mb-2">{{ sectionTitle }}</h2>
          <p class="text-muted-foreground">{{ sectionDescription }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
          @for (member of teamMembers; track member.id) {
          <div
            class="flex flex-col md:flex-row bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              [src]="member.avatar"
              [alt]="member.name"
              class="w-full md:w-48 h-48 object-cover"
            />
            <div class="p-6 flex-1">
              <h5 class="text-2xl font-semibold mb-1">
                {{ member.name }}
              </h5>
              <p class="text-primary mb-3">{{ member.role }}</p>
              <p class="text-neutral-600 dark:text-neutral-300 mb-4">
                {{ member.bio }}
              </p>
              <div class="flex gap-4">
                @for (social of member.socials; track $index) {
                <a
                  [href]="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <mat-icon>{{ social.icon }}</mat-icon>
                </a>
                }
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>`,
      component: '',
      styles: `/* Tailwind is used directly in template */`,
    },
    '4': {
      template: `    <section class="py-24 bg-gray-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-4">{{ title }}</h2>
            <p class="text-muted-foreground mb-6">{{ description }}</p>
            <button mat-raised-button color="primary">
              {{ ctaLabel }}
            </button>
          </div>
          <div class="grid gap-8 sm:grid-cols-2">
            @for (member of teamMembers; track member.id) {
            <div class="flex flex-col items-center text-center">
              <img
                [src]="member.avatar"
                [alt]="member.name"
                class="w-28 h-28 rounded-full mb-4 object-cover"
              />
              <h5 class="text-lg font-semibold">{{ member.name }}</h5>
              <p class="text-sm text-primary">{{ member.role }}</p>
              <div class="flex gap-3 mt-2">
                @for (social of member.socials; track $index) {
                <a
                  [href]="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <mat-icon>{{ social.icon }}</mat-icon>
                </a>
                }
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </section>`,
      component: '',
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
});
