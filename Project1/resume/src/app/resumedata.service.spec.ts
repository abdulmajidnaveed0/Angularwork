import { TestBed } from '@angular/core/testing';

import { ResumedataService } from './resumedata.service';

describe('ResumedataService', () => {
  let service: ResumedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
