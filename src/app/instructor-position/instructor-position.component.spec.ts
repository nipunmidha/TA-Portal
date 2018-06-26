import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorPositionComponent } from './instructor-position.component';

describe('InstructorPositionComponent', () => {
  let component: InstructorPositionComponent;
  let fixture: ComponentFixture<InstructorPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
