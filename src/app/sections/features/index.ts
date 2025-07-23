import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { featuresSectionData } from './data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class FeaturesPage {
  public data = featuresSectionData;
}
