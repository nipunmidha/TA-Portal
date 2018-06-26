import { Component, OnInit } from '@angular/core';
import {InstructorServiceClient} from '../services/instrcutor.service.client';
import {Instructor} from '../models/instructor.model.client';
import {SchoolServiceClient} from '../services/school.service.client';
import {School} from '../models/school.model.client';

@Component({
  selector: 'app-admin-instructors-pannel',
  templateUrl: './admin-instructors-pannel.component.html',
  styleUrls: ['./admin-instructors-pannel.component.css']
})
export class AdminInstructorsPannelComponent implements OnInit {

  constructor(private service: InstructorServiceClient,
              private schoolService: SchoolServiceClient) { }
  instructors: Instructor[] = [];
  instructor: Instructor = new Instructor();
  results: School[] = [];
  instructorSchool: School = new School();
  addingError;
  isEdit;
  isSet = false;
  ngOnInit() {
    this.findAllInstructor();
  }
  findAllInstructor() {
    this.service.findAllInstructors()
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
    this.service.createInstructor(instructor)
      .then(res => {
        if (res.status === 200) {
          this.instructor = new Instructor();
          this.findAllInstructor();
        } else {
          this.addingError = true;
        }
      });
  }
  deleteInstructor(id) {
    this.service.deleteInstructor(id)
      .then(() => this.findAllInstructor());
  }
  editInstructor(instructor) {
    this.instructor._id = instructor._id;
    this.instructor.email = instructor.email;
    this.instructor.firstName = instructor.firstName;
    this.instructor.lastName = instructor.lastName;
    this.instructor.school = instructor.school.name;
    this.isEdit = true;
  }
  updateInstructor(instructor) {

    if (this.isSet) {
      const ins = {
        email: instructor.email,
        password: instructor.password,
        firstName: instructor.firstName,
        lastName: instructor.lastName,
        _id: instructor._id,
        school: this.instructorSchool._id };
      this.service.updateInstructor(ins)
        .then(res => {
          if (res.status === 200) {
            this.instructor = new Instructor();
            this.isEdit = false;
            this.isSet = false;
            this.findAllInstructor();
          }
        });
    } else {
      const ins = new Instructor();
      ins.email = instructor.email;
      ins.password = instructor.password;
      ins.firstName = instructor.firstName;
      ins.lastName = instructor.lastName;
      ins._id = instructor._id;
      this.service.updateInstructor(ins)
        .then(res => {
          if (res.status === 200) {
            this.instructor = new Instructor();
            this.isEdit = false;
            this.isSet = false;
            this.findAllInstructor();
          }
        });
    }

  }
}
