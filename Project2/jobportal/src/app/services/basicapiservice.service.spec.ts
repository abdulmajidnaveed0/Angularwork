import { TestBed } from '@angular/core/testing';

import { BasicapiserviceService } from './basicapiservice.service';

describe('BasicapiserviceService', () => {
  let service: BasicapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
