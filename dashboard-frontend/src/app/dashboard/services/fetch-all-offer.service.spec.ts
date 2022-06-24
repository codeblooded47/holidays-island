import { TestBed } from '@angular/core/testing';

import { FetchAllOfferService } from './fetch-all-offer.service';

describe('FetchAllOfferService', () => {
  let service: FetchAllOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
