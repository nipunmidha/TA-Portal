import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminServiceClient} from '../services/admin.service.client';
import {ApplicantServiceClient} from '../services/applicant.service.client';
import {Applicant} from '../models/applicant.model.client';
import {Application} from '../models/application.model.client';
import {ApplicationServiceClient} from '../services/application.service.client';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private applicantService: ApplicantServiceClient,
              private applicationService: ApplicationServiceClient,
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
  allApplications: Application[] = [];
  ngOnInit() {
    this.checkProfile();
  }
  checkProfile() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401 || user.type !==  'APPLICANT' ) {
          this.sessionOut = true;
        } else {
          this.user = user;
          this.applicationService.findAllApplicationsForApplicantusingId(user._id)
            .then(applis => this.allApplications = applis.filter(a => a.instructorRating));
        }
        if (user.type ===  'INSTRUCTOR') {
          this.publicView = true;
          this.profView = true;
          this.applicantService.findUserById(this.userId)
            .then(user1 =>{ this.user = user1
              this.applicationService.findAllApplicationsForApplicantusingId(user1._id)
                .then(applis => this.allApplications = applis.filter(a => a.instructorRating));} );
        }
      });
  }
  addData(params) {
    this.positionId = params.positionId;
    this.userId = params.profileId;
    this.checkProfile();
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
