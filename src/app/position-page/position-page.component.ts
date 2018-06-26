import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PositionServiceClient} from '../services/position.service.client';
import {SchoolServiceClient} from '../services/school.service.client';
import {Position} from '../models/position.model.client';
import {School} from '../models/school.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute,
              private positionService: PositionServiceClient,
              private schoolService: SchoolServiceClient,
              private userService: UserServiceClient) {
    this.aRoute.params.subscribe(params => this.loadparams(params));
  }

  postionId;
  position: Position = new Position();
  school: School = new School();
  isIns;
  loadparams(params) {
    this.postionId = params.positionId;
    this.loadPositionData();
  }
  loadPositionData() {
    this.positionService.findPositionById(this.postionId)
      .then(position => {
        this.position = position;
      this.schoolService.findSchoolById(this.position.instructor.school)
        .then(school => this.school = school)
        .then(() => this.userService.profile()
          .then(res => {
            if ( res.status !== 401 && res.type === 'INSTRUCTOR' && res._id === this.position.instructor._id) {
              this.isIns = true;
            }
          })); } );
  }
  ngOnInit() {
  }

}
