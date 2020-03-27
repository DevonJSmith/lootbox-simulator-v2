import { Component, OnInit, Input, Output } from '@angular/core';
import { LootBoxItemModel } from 'src/app/models/lootbox-item-model';
import { EventEmitter } from '@angular/core';
import { transition, animate, style, trigger, useAnimation } from '@angular/animations';
import { FadeInAnimation, FadeOutAnimation } from 'assets/animations';

@Component({
  selector: 'app-lootbox-item',
  templateUrl: './lootbox-item.component.html',
  styleUrls: ['./lootbox-item.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        useAnimation(FadeInAnimation, {
          params: {
            duration: '1300ms'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(FadeOutAnimation, {
          params: {
            duration: '1300ms'
          }
        })
      ])
    ])
  ]
})
export class LootboxItemComponent implements OnInit {

  @Input() lootboxItem: LootBoxItemModel;
  @Output() itemFlipped = new EventEmitter<any>();
  public flipped = false;

  constructor() { }

  ngOnInit() {

  }

  revealItem() {
    this.flipped = true;
    this.itemFlipped.emit(this.flipped);
  }

}
