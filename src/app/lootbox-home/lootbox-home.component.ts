import { Component, OnInit, Input } from '@angular/core';
import { LootboxItemService } from '../services/lootbox-item.service';
import { LootBoxItemModel } from '../models/lootbox-item-model';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { FadeInAnimation, FadeOutAnimation } from 'assets/animations';
import { PlatformLocation } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lootbox-home',
  templateUrl: './lootbox-home.component.html',
  styleUrls: ['./lootbox-home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        useAnimation(FadeInAnimation, {
          params: {
            duration: '900ms'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(FadeOutAnimation, {
          params: {
            duration: '900ms'
          }
        })
      ])
    ])
  ]
})
export class LootboxHomeComponent implements OnInit {

  @Input() itemNumber = 1;
  private seed = 'Default';
  // list of loot box items
  public lootBoxItems: Array<LootBoxItemModel> = [];

  public get AllItemsFlipped() {
    return this.lootBoxItems.every(x => x.flipped);
  }

  constructor(private lootBoxService: LootboxItemService, public route: ActivatedRoute, public platformLocation: PlatformLocation, private snackbar: MatSnackBar) { }

  ngOnInit() {
    // get the seed from the URL, if possible
    const seedParameter = this.route.paramMap.subscribe(params => {
      if (params.get('seed')) {
        this.seed = params.get('seed');
      }

      this.GenerateLootBoxItems();
    });
  }

  GenerateLootBoxItems() {
    this.lootBoxItems = [];
    for (let i = 0; i < this.itemNumber; i ++) {
      this.lootBoxService.generateLootboxItem(this.seed).subscribe(x => {
        this.lootBoxItems.push(x);
      });
    }
  }

  LootBoxItemFlipped(item: LootBoxItemModel) {
    item.flipped = true;
  }

  LinkCopied() {
    this.snackbar.open('Link Copied!', null, {
      duration: 1300
    });
  }



}
