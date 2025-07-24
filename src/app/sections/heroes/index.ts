import { ChangeDetectionStrategy, Component } from '@angular/core';
import BlocksList from '@components/block-list';
import { heroSectionsData } from './data';

@Component({
  selector: 'page-blocks-list',
  imports: [BlocksList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <blocks-list [data]="data" />`,
})
export default class HeroesPage {
  public data = heroSectionsData;
}
