import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {
  // Picsum request variables
  private picSumBaseUrl = 'https://picsum.photos';
  private pictureWidth = 600;
  private pictureHeight = 600;

  constructor(private httpClient: HttpClient) { }

  public getRandomImgUrl(seed: number): string {
    return this.picSumBaseUrl + '/seed/' + seed + '/' + this.pictureWidth + '/' + this.pictureHeight;
    // return loremPicsum({
    //   width: 300,
    //   image: seed
    // });
  }
}
