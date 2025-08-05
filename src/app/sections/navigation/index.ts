import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { navigationSectionData } from '@examples/navigation/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class NavigationPage {
  public data = navigationSectionData;
}
