import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'section-header',
  imports: [],
  template: `
    <div class="p-6">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-foreground mb-2">
            {{ title() }}
          </h3>
          <p class="text-sm text-muted-foreground leading-relaxed mb-3">
            {{ description() }}
          </p>
        </div>
        <ng-content />
      </div>
    </div>
  `,
})
export default class SectionHeader {
  public data = input({ title: '', description: '' });
  public title = computed(() => this.data().title);
  public description = computed(() => this.data().description);
}
