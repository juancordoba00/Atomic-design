import { Component, Input } from '@angular/core';

export interface IProduct {
  img: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product: IProduct = {
    img: '',
    name: '',
    description: '',
  }
}
