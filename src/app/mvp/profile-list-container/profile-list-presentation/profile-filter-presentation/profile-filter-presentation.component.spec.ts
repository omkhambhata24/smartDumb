import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFilterPresentationComponent } from './profile-filter-presentation.component';

describe('ProfileFilterPresentationComponent', () => {
  let component: ProfileFilterPresentationComponent;
  let fixture: ComponentFixture<ProfileFilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFilterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
