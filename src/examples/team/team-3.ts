import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-team3',
  template: `
    <section class="py-24">
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
    </section>
  `,
  imports: [MatIconModule],
})
export default class ExampleTeam3Component {
  sectionTitle = 'The People Behind';
  sectionDescription =
    'Our experienced team members bring unique expertise to the table';

  teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/team/alice.jpg',
      bio: 'Alice leads the company with over 15 years of industry experience.',
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
      bio: 'Bob oversees the technical vision and leads our engineering teams.',
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
      bio: 'Clara creates beautiful, user‑centric designs for our products.',
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
      bio: 'Daniel crafts compelling marketing strategies to grow our brand.',
      socials: [
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
  ];
}
