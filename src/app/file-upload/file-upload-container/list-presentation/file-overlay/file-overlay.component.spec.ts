import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOverlayComponent } from './file-overlay.component';

describe('FileOverlayComponent', () => {
  let component: FileOverlayComponent;
  let fixture: ComponentFixture<FileOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
