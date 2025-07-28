import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { pricingSectionsData } from '../../../examples/pricing/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class PricingPage {
  public data = pricingSectionsData;
}
