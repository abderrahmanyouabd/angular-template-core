import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRep} from "../models/product-rep";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/'

  constructor(private httpClient: HttpClient) { }

  getProducts(limit: number = 5) {
    const productsUrl = this.baseUrl.concat(`products?limit=${limit}`);
    return this.httpClient.get<Array<ProductRep>>(productsUrl);
  }

  createProduct(product: ProductRep) {
    const productsUrl = this.baseUrl.concat(`products`);
    return this.httpClient.post<ProductRep>(productsUrl, product)
  }
}
