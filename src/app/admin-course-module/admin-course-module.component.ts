import { Component, OnInit } from '@angular/core';
import {SchoolServiceClient} from '../services/school.service.client';
import {InstructorServiceClient} from '../services/instrcutor.service.client';
import {School} from '../models/school.model.client';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin-course-module',
  templateUrl: './admin-course-module.component.html',
  styleUrls: ['./admin-course-module.component.css']
})
export class AdminCourseModuleComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private schoolService: SchoolServiceClient) { }
  instructors: Course[] = [];
  instructor: Course = new Course();
  results: School[] = [];
  instructorSchool: School = new School();
  addingError;
  isEdit;
  isSet = false;
  ngOnInit() {
    this.findAllInstructor();
  }
  findAllInstructor() {
    this.service.findAllCourses()
      .then(users => this.instructors = users);
  }
  schoolChange(name) {
    if (name.length > 2 ) {
      this.schoolService.searchSchool(name)
        .then(res => {
          if (res.status === 200) {
            res.json()
              .then(schools => this.results = schools);
          }
        });
    }
    if (name.length === 2) {
      this.results = [];
    }
  }
  selectSchool(school) {
    this.instructorSchool = school;
    this.instructor.school = school.name;
    this.results = [];
    this.isSet = true;
  }
  addInstructor( instructor) {
    this.addingError = false;
    instructor.school = this.instructorSchool;
    this.service.createCourse(instructor)
      .then(res => {
        if (res.status === 200) {
          this.instructor = new Course();
          this.findAllInstructor();
        } else {
          this.addingError = true;
        }
      });
  }
  deleteInstructor(id) {
    this.service.deleteCourse(id)
      .then(() => this.findAllInstructor());
  }
  editInstructor(instructor) {
    this.instructor._id = instructor._id;
    this.instructor.courseNumber = instructor.courseNumber;
    this.instructor.name = instructor.name;
    this.instructor.school = instructor.school.name;
    this.isEdit = true;
  }
  updateInstructor(instructor) {
    if (this.isSet) {
      const ins = {
        name: instructor.email,
        courseNumber: instructor.courseNumber,
        _id: instructor._id,
        school: this.instructorSchool._id };
      this.service.updateCourse(ins)
        .then(res => {
          if (res.status === 200) {
            this.instructor = new Course();
            this.isEdit = false;
            this.isSet = false;
            this.findAllInstructor();
          }
        });
    } else {
      const ins = new Course();
      ins.name = instructor.email;
      ins.courseNumber = instructor.courseNumber;
      ins._id = instructor._id;
      this.service.updateCourse(ins)
        .then(res => {
          if (res.status === 200) {
            this.instructor = new Course();
            this.isEdit = false;
            this.isSet = false;
            this.findAllInstructor();
          }
        });
    }

  }
}
