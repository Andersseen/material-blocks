import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { formsSectionData } from '@examples/forms/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class FootersPage {
  public data = formsSectionData;
}
