import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RegisterC} from '../models/regsiter.model.client';
import {SchoolServiceClient} from '../services/school.service.client';
import {School} from '../models/school.model.client';
import {Course} from '../models/course.model.client';
import {InstructorServiceClient} from '../services/instrcutor.service.client';
import {ApplicantServiceClient} from '../services/applicant.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private router: Router,
              private service: UserServiceClient,
              private schoolService: SchoolServiceClient,
              private insService: InstructorServiceClient,
              private studentService: ApplicantServiceClient) { }
  Constants
  user: RegisterC = new RegisterC();
  loginFailed = false;
  isIns = true;
  isAppl = false;
  results: School[] = [];
  schoolName = '';
  newSchool: School = new School();
  selected;
  showResults;
  addC;
  passmatch;
  register = (reg) => {
    this.passmatch = false;
    if (this.user.password !== this.user.confirmPassword ) {
      this.passmatch = true; } else {
      if (reg.email && reg.password && reg.confirmPassword) {
        if (this.isIns) {
          this.insService.createInstructor(reg)
            .then(res => {
              if (res.status === 200) {
                this.router.navigate(['instructor']);
              }
              if (res.status === 401) {
                this.loginFailed = true;
              }
            });
        }
        if (this.isAppl) {
          this.studentService.createApplicant(reg)
            .then(res => {
              if (res.status === 200) {
                this.router.navigate(['applicant']);
              } else {
                this.loginFailed = true;
              }
            });
        }
      }
    }
  }
  ngOnInit() {
  }
  userIsInstructor() {
    this.isIns = true;
    this.isAppl = false;
  }
  userIsApplicant() {
    this.isAppl = true;
    this.isIns = false;
  }
  schoolChange(name) {
    this.showResults = true;
      this.schoolService.searchSchool(name)
        .then(res => {
          if (res.status === 200) {
            res.json()
              .then(schools => this.results = schools);
          }
        });
    if (name.length === 0) {
      this.showResults = false;
    }
  }
  selectSchool(school) {
    this.user.school = school;
    this.schoolName = school.name;
    this.showResults = false;
    this.selected = true;
  }
  clearSchool() {
    if (!this.selected) {this.schoolName = ''; }
  }
  addSchool() {
    this.addC = true;
    this.showResults = false;
    this.schoolName = '';
    this.selected = true;
  }
  addNewSchool( school) {
    this.schoolService.createSchool(school)
      .then(res => {
        if (res.status === 200) {
          res.json().then(cour => {
            this.user.school = cour;
            this.schoolName =  cour.name;
            this.addC = false;
            this.newSchool = new School();
          });
        }
      });
  }
  cancelAdd() {
    this.addC = false;
  }
}
