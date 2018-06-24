import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {NavigationStart, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private route: Router, private service: UserServiceClient ) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.service.profile()
          .then(user => this.user = user); }
    } );
  }
  logout() {
    this.service
      .logout()
      .then((res) => {this.route.navigate(['login']);
      });
  }
  ngOnInit() {
    this.service.profile()
      .then(user => this.user = user); }


}
