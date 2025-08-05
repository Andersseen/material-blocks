import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { contactSectionData } from '@examples/contact/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class ContactPage {
  public data = contactSectionData;
}
