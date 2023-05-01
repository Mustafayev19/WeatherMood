import { TestBed } from '@angular/core/testing';

import { RestfullService } from './restfull.service';

describe('RestfullService', () => {
  let service: RestfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
