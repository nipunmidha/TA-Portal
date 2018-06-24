import { Component, OnInit } from '@angular/core';
import {Instructor} from '../models/instructor.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Position} from '../models/position.model.client';
import {PositionServiceClient} from '../services/position.service.client';
import {School} from '../models/school.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-position-grid',
  templateUrl: './position-grid.component.html',
  styleUrls: ['./position-grid.component.css']
})
export class PositionGridComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private positionService: PositionServiceClient) { }

  user: Instructor = new Instructor();
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
          this.isAppli = true; }
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
