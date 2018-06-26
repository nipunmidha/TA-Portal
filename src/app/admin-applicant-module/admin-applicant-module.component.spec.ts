import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplicantModuleComponent } from './admin-applicant-module.component';

describe('AdminApplicantModuleComponent', () => {
  let component: AdminApplicantModuleComponent;
  let fixture: ComponentFixture<AdminApplicantModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApplicantModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplicantModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
