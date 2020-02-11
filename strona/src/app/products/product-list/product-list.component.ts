import { Component, OnInit } from "@angular/core";
import { Product } from "./products-model";

import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import { Entry } from "contentful";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle = "Product List";

  public products: Product[];
  // public products$: Observable<Product[]>;
  showImage = false;
  filterbox = "";

  ngOnInit() {
    // this.products$ = this.productService.getProducts();
    this.productService
      .getProducts()
      .then(
        response =>
          (this.products = response.items.map(x => this.mapProducts(x)))
      )
      .catch(console.error);
  }

  private mapProducts(entry: Entry<any>): Product {
    const p: Product = {
      description: entry.fields.description,
      starRating: entry.fields.starRating,
      productCode: entry.fields.productCode,
      price: entry.fields.price,
      productId: entry.fields.productId,
      productName: entry.fields.productName,
      releaseDate: entry.fields.releaseDate,
      imageurl: entry.fields.image2 ? entry.fields.image2.fields.file.url : ""
    };
    console.log("abc", entry.fields);
    return p;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
