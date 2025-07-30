import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-team1',
  template: `
    <section class="py-24">
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
    </section>
  `,
  imports: [MatIconModule],
})
export default class ExampleTeam1Component {
  // Titles for the section
  sectionTitle = 'Our Team';
  sectionDescription = 'Meet the people behind our success';

  // Team member data
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
