import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationServiceClient} from '../services/application.service.client';
import {Application} from '../models/application.model.client';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.css']
})
export class ApplicationsGridComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute,
              private applicationService: ApplicationServiceClient) {
    this.aRoute.params.subscribe(params => this.loadApplications( params.positionId) );
  }

  positionId = '';
  applications: Application[] = []
  loadApplications(id) {
    this.positionId = id;
    this.findAllApplications();
  }
  ngOnInit() {
  }
  findAllApplications() {
    this.applicationService.findAllApplicationsForAPosition(this.positionId)
      .then(res => {
        if (res.status === 200) {
          res.json().then(applications => this.applications = applications.filter( a => !a.isHired));
        }
      });
  }
  hire(id) {
    this.applicationService.updateIsSelected(id)
      .then(() => this.findAllApplications());
  }
}
