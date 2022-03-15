import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListPresentationComponent } from './profile-list-presentation.component';

describe('ProfileListPresentationComponent', () => {
  let component: ProfileListPresentationComponent;
  let fixture: ComponentFixture<ProfileListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
