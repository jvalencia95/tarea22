import { TestBed } from '@angular/core/testing';

import { UserInterceptorsService } from './user-interceptors.service';

describe('UserInterceptorsService', () => {
  let service: UserInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
