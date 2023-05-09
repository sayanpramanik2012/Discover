import { TestBed } from '@angular/core/testing';

import { ShimmerService } from './shimmer.service';

describe('ShimmerService', () => {
  let service: ShimmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShimmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
