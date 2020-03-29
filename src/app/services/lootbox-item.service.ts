import { Injectable } from '@angular/core';
import { LootBoxItemModel } from '../models/lootbox-item-model';
import { RandomTextService } from './random-text.service';
import { RandomImageService } from './random-image.service';
import * as faker from 'faker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LootboxItemService {

  constructor(private randomTextService: RandomTextService, private randomImageService: RandomImageService) { }

  public generateLootboxItem(seed: string | null): Observable<LootBoxItemModel> {
    const numberSeed = this.generateSeed(seed);

    return new Observable(subscriber => {
      subscriber.next({
        name: this.randomTextService.getRandomName(numberSeed),
        description: this.randomTextService.getRandomDescription(numberSeed),
        imgUrl: this.randomImageService.getRandomImgUrl(numberSeed),
        flipped: false
      });
    });
  }

  private generateSeed(seed: string | null): number {
    let seedString = seed;
    if (!seedString) {
      seedString = faker.internet.password(8);
    }

    // convert password to ascii code
    let asciiString = '';
    for (let i = 0; i < seedString.length; i ++) {
      asciiString += seedString.charCodeAt(i).toString(10);
    }

    return Number.parseInt(asciiString, 10);
  }
}
