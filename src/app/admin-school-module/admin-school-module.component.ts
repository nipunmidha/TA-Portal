import { Component, OnInit } from '@angular/core';
import {School} from '../models/school.model.client';
import {SchoolServiceClient} from '../services/school.service.client';

@Component({
  selector: 'app-admin-school-module',
  templateUrl: './admin-school-module.component.html',
  styleUrls: ['./admin-school-module.component.css']
})
export class AdminSchoolModuleComponent implements OnInit {

  constructor(private service: SchoolServiceClient) { }
  schools: School[] = [];
  school: School = new School();
  addingError;
  isEdit;
  ngOnInit() {
    this.findAllSchools();
  }
  findAllSchools() {
    this.service.findAllSchools()
      .then(schools => this.schools = schools);
  }
  addSchool( school) {
    this.addingError = false;
    this.service.createSchool(school)
      .then(res => {
        if (res.status === 200) {
          this.school.name = null;
          this.school.emailDomain = null;
          this.school.city = null;
          this.findAllSchools();
        } else { this.addingError = true; }
      });
  }
  deleteSchool(id) {
    this.service.deleteSchool(id)
      .then(() => this.findAllSchools());
  }
  editSchool(school) {
   this.school = school;
   this.isEdit = true;
  }
  updateSchool(school) {
    this.service.updateSchool(school)
      .then(res => {
        if (res.status === 200) {
          this.school = new School();
          this.isEdit = false;
        }
      });
  }
}
