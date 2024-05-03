import { Component, Input } from '@angular/core';
import { IProduct } from '../../molecules/card-product/card-product.component';

export interface IProductSection {
  title: string;
  products: IProduct[];
}


@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent {
  @Input() productSection: IProductSection = {
    title: '',
    products: [],
  }
}
