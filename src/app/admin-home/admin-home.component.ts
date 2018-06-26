import { Component, OnInit } from '@angular/core';
import {AdminServiceClient} from '../services/admin.service.client';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private service: AdminServiceClient) { }
  isAdmin;
  wrongAccess;
  ngOnInit() {
    this.service.profile()
      .then(user => {
        if (user.type === 'ADMIN') { this.isAdmin = true; }
        if (user.type !== 'ADMIN' && user) { this.wrongAccess = true; }
      });
  }

}
