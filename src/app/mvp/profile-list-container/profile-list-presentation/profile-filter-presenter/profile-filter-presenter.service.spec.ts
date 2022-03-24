import { TestBed } from '@angular/core/testing';

import { ProfileFilterPresenterService } from './profile-filter-presenter.service';

describe('ProfileFilterPresenterService', () => {
  let service: ProfileFilterPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileFilterPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
