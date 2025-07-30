import { Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { teamSectionsData } from '@examples/team/data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  template: ` <blocks-list [data]="data" />`,
})
export default class TeamPage {
  public data = teamSectionsData;
}
