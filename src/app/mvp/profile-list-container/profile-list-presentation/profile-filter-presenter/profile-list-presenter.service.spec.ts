import { TestBed } from '@angular/core/testing';

import { ProfileListPresenterService } from './profile-list-presenter.service';

describe('ProfileListPresenterService', () => {
  let service: ProfileListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
