import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { testimonialSectionsData } from '@examples/testimonials/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class TestimonialsPage {
  public data = testimonialSectionsData;
}
