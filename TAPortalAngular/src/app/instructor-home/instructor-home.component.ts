import { Component, OnInit } from '@angular/core';
import {InstructorServiceClient} from '../services/instrcutor.service.client';
import {Instructor} from '../models/instructor.model.client';
import {School} from '../models/school.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {PositionServiceClient} from '../services/position.service.client';
import {Position} from '../models/position.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.css']
})
export class InstructorHomeComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private positionService: PositionServiceClient,
              private route: Router) { }

  user: Instructor = new Instructor();
  instructorSchool: School = new School();
  sessionOut;
  positions: Position[] = []
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401 || user.type !== 'INSTRUCTOR') {
          this.sessionOut = true; }
      });
  }


}
