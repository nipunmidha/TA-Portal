import { Component, OnInit } from '@angular/core';
import {InstructorServiceClient} from '../services/instrcutor.service.client';
import {Instructor} from '../models/instructor.model.client';

@Component({
  selector: 'app-admin-instructors-pannel',
  templateUrl: './admin-instructors-pannel.component.html',
  styleUrls: ['./admin-instructors-pannel.component.css']
})
export class AdminInstructorsPannelComponent implements OnInit {

  constructor(private service: InstructorServiceClient) { }
  instructors: Instructor[] = [];
  instructor: Instructor ;
  ngOnInit() {
    this.service.findAllInstructors()
      .then(users => this.instructors = users);
  }

}
