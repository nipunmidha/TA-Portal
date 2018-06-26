import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSchoolModuleComponent } from './admin-school-module.component';

describe('AdminSchoolModuleComponent', () => {
  let component: AdminSchoolModuleComponent;
  let fixture: ComponentFixture<AdminSchoolModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSchoolModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSchoolModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
