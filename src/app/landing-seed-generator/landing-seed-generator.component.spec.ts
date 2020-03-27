import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSeedGeneratorComponent } from './landing-seed-generator.component';

describe('LandingSeedGeneratorComponent', () => {
  let component: LandingSeedGeneratorComponent;
  let fixture: ComponentFixture<LandingSeedGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSeedGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSeedGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
