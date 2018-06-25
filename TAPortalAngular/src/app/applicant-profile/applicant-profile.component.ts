import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminServiceClient} from '../services/admin.service.client';
import {ApplicantServiceClient} from '../services/applicant.service.client';
import {Applicant} from '../models/applicant.model.client';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private applicantService: ApplicantServiceClient,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params => this.addData(params));
  }

  user: Applicant = new Applicant();
  sessionOut;
  updateS;
  profView = false;
  publicView = false;
  positionId;
  userId;
  isIns;
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401 || user.type !==  'APPLICANT' ) {
          this.sessionOut = true;
        } else {
          this.user = user;
        }
        if (user.type ===  'INSTRUCTOR') {
          this.isIns = true;
        }
      });
  }
  addData(params) {
    this.positionId = params.positionId;
    this.userId = params.profileId;
    this.loadUser(this.userId);
  }
  loadUser(id) {
    if (this.isIns) {
      this.publicView = true;
      this.profView = true;
      this.applicantService.findUserById(id)
        .then(user => this.user = user);
    }

  }

  logout() {
    this.sessionOut = false;
    this.userService.logout()
      .then((res) => {this.router.navigate(['login']);
      });
  }
  update(user) {
      this.applicantService.updateApplicant(user)
        .then(() => this.updateS = true);
  }
  changeView() { this.publicView = !this.publicView; this.updateS = false; }

}
