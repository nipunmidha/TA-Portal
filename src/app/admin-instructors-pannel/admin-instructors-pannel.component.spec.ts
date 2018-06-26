import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstructorsPannelComponent } from './admin-instructors-pannel.component';

describe('AdminInstructorsPannelComponent', () => {
  let component: AdminInstructorsPannelComponent;
  let fixture: ComponentFixture<AdminInstructorsPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstructorsPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstructorsPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
