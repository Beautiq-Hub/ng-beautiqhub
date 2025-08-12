import { TestBed } from '@angular/core/testing';

import { BetaInputService } from './beta-input.service';

describe('BetaInputService', () => {
  let service: BetaInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetaInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
