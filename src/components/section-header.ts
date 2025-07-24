import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'section-header',
  imports: [],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold">{{ title() }}</h1>
      <p class="mt-2">
        {{ description() }}
      </p>
    </div>
  `,
})
export default class SectionHeader {
  public data = input({ title: '', description: '' });
  public title = computed(() => this.data().title);
  public description = computed(() => this.data().description);
}
