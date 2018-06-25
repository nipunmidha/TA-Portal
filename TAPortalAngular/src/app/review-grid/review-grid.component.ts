import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationServiceClient} from '../services/application.service.client';
import {Application} from '../models/application.model.client';

@Component({
  selector: 'app-review-grid',
  templateUrl: './review-grid.component.html',
  styleUrls: ['./review-grid.component.css']
})
export class ReviewGridComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute,
              private applicationService: ApplicationServiceClient) {
    aRoute.params.subscribe(params => this.loadAllApplications(params.positionId) );
  }
  positionId;
  aaSelected;
  section;
  sem;
  year;
  hide;
  // starRating = 0;
  workingAA: Application = new Application();
  hiredAppplications: Application[] = []
  loadAllApplications(posId) {
    this.positionId = posId;
    this.findAllApplications();
  }

  findAllApplications() {
   this.applicationService.findAllApplicationsForAPosition(this.positionId)
     .then(res => {
       if (res.status === 200 ) {
         res.json()
           .then(applications => {
             this.hiredAppplications = applications.filter(aa => aa.isSelected);
              this.section = this.hiredAppplications[0].position.sectionName;
             this.sem = this.hiredAppplications[0].position.semester;
             this.year = this.hiredAppplications[0].position.year;
           });
       }
     });
  }
  selectAA( aa ) {
    this.hide = false;
    if (aa.instructorRating) {
      this.hide = true;
    }
    this.aaSelected = aa._id;
    this.workingAA.instructorRating = aa.instructorRating;
    this.workingAA.instructorRemarks = aa.instructorRemarks;
  }
  unSelectAA() {
    this.aaSelected = null;
    this.workingAA.instructorRating = 0;
    this.workingAA.instructorRemarks = '';
    this.hide = false;
  }
  ngOnInit() {
  }
  rateStars(val) {
    if (!this.hide) {
    this.workingAA.instructorRating = val; }
  }
  saveRatings( aa ) {
    const ty = {applicant: aa.applicant._id, _id: aa._id, instructorRemarks: this.workingAA.instructorRemarks,
      instructorRating: this.workingAA.instructorRating}
    this.applicationService.reviewApplication(ty)
      .then(() => this.hide = true );
  }
}
