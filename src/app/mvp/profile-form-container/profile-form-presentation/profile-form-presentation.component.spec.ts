import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormPresentationComponent } from './profile-form-presentation.component';

describe('ProfileFormPresentationComponent', () => {
  let component: ProfileFormPresentationComponent;
  let fixture: ComponentFixture<ProfileFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
