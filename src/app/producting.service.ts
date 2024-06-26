import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductingService {
  readonly imageBaseFilePath = "assets/images/products";
  readonly productsList: Product[] = [
    {
      id: 1,
      name: "Удобрения",
      imageFilePath: `${this.imageBaseFilePath}/1.svg`,
      price: 1200,
      description: ""
    },
    {
      id: 2,
      name: "Фунгициды",
      imageFilePath: `${this.imageBaseFilePath}/2.svg`,
      price: 170,
      description: ""
    },
    {
      id: 3,
      name: "Гербициды",
      imageFilePath: `${this.imageBaseFilePath}/3.svg`,
      price: 1120,
      description: ""
    },
    {
      id: 4,
      name: "Инсектициды",
      imageFilePath: `${this.imageBaseFilePath}/4.svg`,
      price: 1200,
      description: ""
    },
    {
      id: 5,
      name: "Спец. препараты",
      imageFilePath: `${this.imageBaseFilePath}/5.svg`,
      price: 1175,
      description: ""
    },
    {
      id: 6,
      name: "Регуляторы роста",
      imageFilePath: `${this.imageBaseFilePath}/6.svg`,
      price: 1130,
      description: ""
    },
    {
      id: 7,
      name: "Регуляторы роста",
      imageFilePath: `${this.imageBaseFilePath}/6.svg`,
      price: 1220,
      description: ""
    },
    {
      id: 8,
      name: "Спец. препараты",
      imageFilePath: `${this.imageBaseFilePath}/5.svg`,
      price: 1200,
      description: ""
    },
    {
      id: 9,
      name: "Инсектициды",
      imageFilePath: `${this.imageBaseFilePath}/4.svg`,
      price: 1300,
      description: ""
    },
    {
      id: 10,
      name: "Гербициды",
      imageFilePath: `${this.imageBaseFilePath}/3.svg`,
      price: 1110,
      description: ""
    },
    {
      id: 11,
      name: "Фунгициды",
      imageFilePath: `${this.imageBaseFilePath}/2.svg`,
      price: 1150,
      description: ""
    },
    {
      id: 12,
      name: "Удобрения",
      imageFilePath: `${this.imageBaseFilePath}/1.svg`,
      price: 2140,
      description: ""
    }
  ];
  constructor() { }

  getAllProductsList(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find(product => product.id === id);
  }
}
