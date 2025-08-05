import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { ecommerceSectionsData } from '@examples/ecommerce/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class EcommercePage {
  public data = ecommerceSectionsData;
}
