import { TestBed } from '@angular/core/testing';

import { LoginAuthService } from './loginauth.service';

describe('AuthserviceService', () => {
  let service: LoginAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
