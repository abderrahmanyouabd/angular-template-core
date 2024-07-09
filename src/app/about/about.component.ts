import {Component} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRep} from "../services/api/models/product-rep";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{
  constructor(private productService: ProductService) {
    // this.productService.getProducts().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   }
    // });
    const product: ProductRep = {
      title: 'My Product',
      description: 'clean and wash',
      price: 20,
      category: 'Any Category',
      image: 'https://some-image.jpg'
    }
    this.productService.createProduct(product).subscribe({
      next: (data) => {console.log(data);},
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    });
  }
}
