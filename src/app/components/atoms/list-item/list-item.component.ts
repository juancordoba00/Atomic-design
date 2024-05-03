import { Component, Input } from '@angular/core';

export interface IListItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: IListItem = {
    text: '',
  };
}
