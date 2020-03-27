import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootboxItemComponent } from './lootbox-item.component';

describe('LootboxItemComponent', () => {
  let component: LootboxItemComponent;
  let fixture: ComponentFixture<LootboxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
