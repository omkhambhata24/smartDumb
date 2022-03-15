import { TestBed } from '@angular/core/testing';

import { ProfileFormPresenterService } from './profile-form-presenter.service';

describe('ProfileFormPresenterService', () => {
  let service: ProfileFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
