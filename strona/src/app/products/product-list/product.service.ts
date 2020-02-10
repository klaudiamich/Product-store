import { Injectable } from "@angular/core";
import { Product } from "./products-model";
import { HttpClient } from "@angular/common/http";
import * as contentful from "contentful";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  client: contentful.ContentfulClientApi;

  constructor(private httpClient: HttpClient) {
    this.client = contentful.createClient({
      space: "5drwpmww2wz4",
      accessToken: "_e7C8w7_kIYZqRizxQ-BryDi3VMf07GBicj4sKlXKeU"
    });
  }

  // getProducts() {
  //   return this.httpClient.get<Product[]>("assets/products_api/products.json");
  // }

  getProducts() {
    return this.client.getEntries({
      content_type: "products"
    });
  }
}
