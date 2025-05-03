import { TestBed } from '@angular/core/testing';

import { BoitierService } from './boitier.service';

describe('BoitierService', () => {
  let service: BoitierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoitierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
