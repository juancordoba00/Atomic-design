import { Component } from '@angular/core';
import { IListItem } from '../../atoms/list-item/list-item.component';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {
  items: IListItem[] = [
    { text: 'Inicio', link: '/' },
    { text: 'Productos', link: '/about' },
    { text: 'Contacto', link: '/contact' },
  ]
}
