import { Component, OnInit } from '@angular/core';
import {AdminServiceClient} from '../services/admin.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {InstructorServiceClient} from '../services/instrcutor.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private adminService: AdminServiceClient,
              private userService: UserServiceClient,
              private insService: InstructorServiceClient,
              private router: Router) { }

  user;
  sessionOut;
  isAdmin
  updateS;
  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (user.status === 401 || (user.type !==  'ADMIN' && user.type !==  'INSTRUCTOR') ) {
          this.sessionOut = true;
        } else {
          this.user = user;
          if (this.user.type === 'ADMIN') {
            this.isAdmin = true;
          }
        }});
  }

  logout() {
    this.sessionOut = false;
    this.userService.logout()
      .then((res) => {this.router.navigate(['login']);
      });
  }
  update(user) {
    if (this.isAdmin) {
      this.adminService.updateAdmin(user)
        .then(() => this.updateS = true);
    } else {
      this.insService.updateInstructor(user)
        .then(() => this.updateS = true);
    }
  }

}
