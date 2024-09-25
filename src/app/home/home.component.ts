import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private productService: ProductsService
  ) {

  }
  products: Product[] = [];

  OnProductOutput(product: Product) {
    console.log(product, 'Output');
  }

  ngOnInit() {
    this.productService
      .getProducts('http://localhost:3000/clothes', {page: 0, perPage: 5})
      .subscribe((products: Product) => {
      this.products = products.items;
    })
  }
}
