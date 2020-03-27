import { TestBed } from '@angular/core/testing';

import { RandomTextService } from './random-text.service';

describe('RandomTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomTextService = TestBed.get(RandomTextService);
    expect(service).toBeTruthy();
  });
});
