import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { statsSectionData } from '@examples/stats/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class StatsPage {
  public data = statsSectionData;
}
