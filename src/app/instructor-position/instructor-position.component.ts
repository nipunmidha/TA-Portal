import { Component, OnInit } from '@angular/core';
import {Position} from '../models/position.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Instructor} from '../models/instructor.model.client';
import {Course} from '../models/course.model.client';
import {PositionServiceClient} from '../services/position.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instructor-position',
  templateUrl: './instructor-position.component.html',
  styleUrls: ['./instructor-position.component.css']
})
export class InstructorPositionComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private courseService: CourseServiceClient,
              private icaService: PositionServiceClient,
              private route: Router) { }

  position: Position = new Position();
  user: Instructor = new Instructor();
  sessionOut;
  isIns;
  addC = false;
  newCourse: Course = new Course();
  // selectedCourse: Course;
  courseName = '';
  results: Course[] = [];
  showResults;
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401) {
          this.sessionOut = true;
        } else {
          this.user = user;
          if (this.user.type === 'INSTRUCTOR') {
            this.isIns = true;
          }
        }});
  }


  selectCourse(course) {
    this.position.course = course;
    this.courseName = course.courseNumber + ' - ' + course.name;
    this.showResults = false;
  }
  searchCourse(name) {
    this.showResults = true;
    this.courseService.searchCourses(name, this.user.school._id)
        .then(res => {
          if (res.status === 200) {
            res.json()
              .then(resl => this.results = resl);
          }
        });
    if (name.length === 0) { this.results = []; this.removeAdd(); }
  }
  taSuggest(str) {
    const vari = str / 30;
    this.position.noOfTa = Math.round(vari) ;
  }
  addCourse() {
    this.addC = true;
    this.showResults = false;
    this.courseName = '';
  }
  addInstructor( course) {
    course.school = this.user.school;
    this.courseService.createCourse(course)
      .then(res => {
        if (res.status === 200) {
         res.json().then(cour => {
           this.position.course = cour;
           this.courseName = cour.courseNumber + ' - ' + cour.name;
           this.addC = false;
           this.newCourse = new Course();
         });
        }
      });
  }
  submitPos(ica) {
    this.icaService.createPosition(ica)
      .then(res => {
        if (res.status === 200) {
          this.route.navigate(['instructor']);
        }
      });
  }
  cancelAdd() {
    this.addC = false;
  }
  removeAdd() { this.showResults = false; }
}
