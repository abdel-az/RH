import { TestBed } from '@angular/core/testing';

import { RaionageService } from './raionage.service';

describe('RaionageService', () => {
  let service: RaionageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaionageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
