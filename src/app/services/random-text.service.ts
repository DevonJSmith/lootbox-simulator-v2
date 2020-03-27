import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class RandomTextService {

  constructor() { }

  public getRandomName(seed: number): string {
    faker.seed(seed);
    return faker.commerce.productName();
  }

  public getRandomDescription(seed: number): string {
    faker.seed(seed);
    return faker.hacker.phrase();
  }
}
