import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-team2',
  template: `
    <section class="py-24 bg-gray-50 dark:bg-neutral-900">
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
    </section>
  `,
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
