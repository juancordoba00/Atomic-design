import { Component } from '@angular/core';
import { IProductSection } from '../../organisms/product-section/product-section.component';

@Component({
  selector: 'app-with-atomic-design',
  templateUrl: './with-atomic-design.component.html',
  styleUrls: ['./with-atomic-design.component.scss']
})
export class WithAtomicDesignComponent {
  tShirt: IProductSection = {
    title: 'Camisetas',
    products: [
      {
        img: '../assets/modern-shirt.jpeg',
        name: 'Camiseta 1',
        description: 'Descripción de la camiseta 1',
      },
      {
        img: '../assets/tshirt-black.webp',
        name: 'Camiseta 2',
        description: 'Descripción de la camiseta 2',
      },
      {
        img: '../assets/tshirt-sports.avif',
        name: 'Camiseta 3',
        description: 'Descripción de la camiseta 3',
      },
    ]
  }

  jackets: IProductSection = {
    title: 'Chaquetas',
    products: [
      {
        img: '../assets/jacket-red.avif',
        name: 'Chaqueta 1',
        description: 'Descripción de la chaqueta 1',
      },
      {
        img: '../assets/jacket-black.webp',
        name: 'Chaqueta 2',
        description: 'Descripción de la chaqueta 2',
      },
      {
        img: '../assets/jacket-blue.avif',
        name: 'Chaqueta 3',
        description: 'Descripción de la chaqueta 3',
      },
    ]
  }
}
