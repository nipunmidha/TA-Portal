import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.loadType(params));
  }
taskType;
  loadType(params) {
    this.taskType = params.type;
  }
  ngOnInit() {
  }

}
