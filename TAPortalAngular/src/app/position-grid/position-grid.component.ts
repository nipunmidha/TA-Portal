import { Component, OnInit } from '@angular/core';
import {Instructor} from '../models/instructor.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Position} from '../models/position.model.client';
import {PositionServiceClient} from '../services/position.service.client';
import {School} from '../models/school.model.client';
import {Router} from '@angular/router';
import {Applicant} from '../models/applicant.model.client';
import {Application} from '../models/application.model.client';
import {ApplicationServiceClient} from '../services/application.service.client';

@Component({
  selector: 'app-position-grid',
  templateUrl: './position-grid.component.html',
  styleUrls: ['./position-grid.component.css']
})
export class PositionGridComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private positionService: PositionServiceClient,
              private applicationService: ApplicationServiceClient) { }

  user: Instructor = new Instructor();
  applicant: Applicant = new Applicant();
  instructorSchool: School = new School();
  aplicantAllApplications = [];
  positions: Position[] = [];
  appliedPosIds = [];
  appliedPositions: Position[] = [];
  allPos: Position[] = [];
  isIns;
  isAppli;
  appliedPos = false;
  notAppliedPos = true;
  hiredPos = false;
  hiredAA: Application[] = [];
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
            res.json().then(icas => this.allPos = icas
              .filter(ica => ica.course.school === this.applicant.school._id && !ica.postionsFilled));
          }
        }).then(() => this.applicationService.findAllApplicationsForApplicant()
        .then(applications => this.aplicantAllApplications = applications))
        .then(() => this.filterAppliedApplications());
    }
    if (! this.isIns && ! this.isAppli) {
      this.positionService.findAllIcas()
        .then(res => {
          if (res.status === 200) {
            res.json().then(icas => this.positions = icas
              .filter(ica =>  !ica.postionsFilled));
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
  applyForPosition(position) {
    if (this.isAppli) {
      this.applicationService.createApplication(position, this.applicant)
        .then(() => this.findAllPostions());
    }
  }
  filterAppliedApplications() {
    this.aplicantAllApplications.map(a => this.appliedPosIds.push(a.position._id));
    this.appliedPositions = this.allPos.filter(pos =>   this.appliedPosIds.includes(pos._id));
    this.positions = this.allPos.filter(pos =>   !this.appliedPosIds.includes(pos._id));
    this.hiredAA = this.aplicantAllApplications.filter(aa => aa.isSelected );
    // if (!this.aplicantAllApplications) {
    //   this.positions = this.allPos;
    // }
  }
  seeAppliedPos() {
    this.appliedPos = true;
    this.hiredPos = false;
    this.notAppliedPos = false;
  }
  seeOtherPos() {
    this.notAppliedPos = true;
    this.appliedPos = false;
    this.hiredPos = false;
  }
  seeHiredPos() {
    this.notAppliedPos = false;
    this.appliedPos = false;
    this.hiredPos = true;
  }
  markClassComplete(id) {
    const pos = {_id: id, courseCompleted: true};
    this.positionService.updatePosition(pos)
      .then(() => this.findAllPostions());
  }
}
