import { Component, OnInit } from '@angular/core';
import {Instructor} from '../models/instructor.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Position} from '../models/position.model.client';
import {PositionServiceClient} from '../services/position.service.client';
import {School} from '../models/school.model.client';
import {Router} from '@angular/router';
import {Applicant} from '../models/applicant.model.client';

@Component({
  selector: 'app-position-grid',
  templateUrl: './position-grid.component.html',
  styleUrls: ['./position-grid.component.css']
})
export class PositionGridComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private positionService: PositionServiceClient) { }

  user: Instructor = new Instructor();
  applicant: Applicant = new Applicant();
  instructorSchool: School = new School();
  positions: Position[] = []
  isIns;
  isAppli;
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if ( user.type === 'INSTRUCTOR') {
              this.isIns = true; }
        if ( user.type === 'APPLICANT') {
          this.isAppli = true;
          this.applicant = user;
        }
          this.findAllPostions();
        }
      );
  }
  findAllPostions() {
    if (this.isIns) {
      this.positionService.findAllIcasForInstructor()
        .then(res => {
          if (res.status === 200) {
            res.json().then(icas => this.positions = icas);
          }
        });
    }
  if (this.isAppli) {
      this.positionService.findAllIcas()
        .then(res => {
          if (res.status === 200) {
            res.json().then(icas => this.positions = icas
              .filter(ica => ica.course.school === this.applicant.school._id));
          }
        });
  }
  if (! this.isIns && ! this.isAppli) {
    this.positionService.findAllIcas()
      .then(res => {
        if (res.status === 200) {
          res.json().then(icas => this.positions = icas);
        }
      });
  }
  }
  deleteIca(id) {
    this.positionService.deleteIca(id)
      .then(() => this.findAllPostions());
  }
  markPositionClosed(id) {
    this.positionService.updatePositionFilled(id)
      .then(() => this.findAllPostions());
  }
}
