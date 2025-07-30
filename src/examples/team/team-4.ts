import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'example-team4',
  template: `
    <section class="py-24 bg-gray-50 dark:bg-neutral-900">
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
    </section>
  `,
  imports: [MatIconModule, MatButtonModule],
})
export default class ExampleTeam4Component {
  title = 'Our Creative Team';
  description =
    'We are a cross‑functional group of passionate individuals who love what we do.';
  ctaLabel = 'Join Us';

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
