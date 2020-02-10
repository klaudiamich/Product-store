export const products: Product[] = [
  {
    productId: 2,
    productName: "Garden Cart",
    productCode: "GDN-0023",
    releaseDate: "March 18, 2019",
    description: "15 gallon capacity rolling garden cart",
    price: 32.99,
    starRating: 4.2,
    imageurl: "../../assets/yard-carts.png"
  },
  {
    productId: 5,
    productName: "Hammer",
    productCode: "TBX-0048",
    releaseDate: "May 21, 2019",
    description: "Curved claw steel hammer",
    price: 8.9,
    starRating: 4.8,
    imageurl: "../../assets/hammer.png"
  }
];

export interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageurl: string;
}
