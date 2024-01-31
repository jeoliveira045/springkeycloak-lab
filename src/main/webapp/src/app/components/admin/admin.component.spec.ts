import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdmimComponent', () => {
  let component: AdmimComponent;
  let fixture: ComponentFixture<AdmimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
