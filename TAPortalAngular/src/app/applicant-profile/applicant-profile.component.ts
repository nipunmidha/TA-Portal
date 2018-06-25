import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
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
              private router: Router) { }

  user: Applicant = new Applicant();
  sessionOut;
  updateS;
  publicView = false;
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401 || user.type !==  'APPLICANT' ) {
          this.sessionOut = true;
        } else {
          this.user = user;
        }});
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
