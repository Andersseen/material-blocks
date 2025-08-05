import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { blogSectionData } from '@examples/blog/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class BlogPage {
  public data = blogSectionData;
}
