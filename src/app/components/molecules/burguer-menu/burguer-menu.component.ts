import { Component } from '@angular/core';
import { IListItem } from '../../atoms/list-item/list-item.component';

@Component({
  selector: 'app-burguer-menu',
  templateUrl: './burguer-menu.component.html',
  styleUrls: ['./burguer-menu.component.scss'],
})
export class BurguerMenuComponent {
  dropdownOpen = false;
  items: IListItem[] = [
    { text: 'Iniciar sesión', link: '/' },
    { text: 'Registrarse', link: '/' },
    { text: 'Carrito', link: '/' },
  ]

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
