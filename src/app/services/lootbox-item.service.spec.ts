import { TestBed } from '@angular/core/testing';

import { LootboxItemService } from './lootbox-item.service';

describe('LootboxItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LootboxItemService = TestBed.get(LootboxItemService);
    expect(service).toBeTruthy();
  });
});
