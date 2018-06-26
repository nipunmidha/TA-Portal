import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }
  Constants
  user: User = new User();
  loginFailed = false;
  passFail = false;
  userFail = false;
  login = (reg) => {
    this.loginFailed = false;
    this.passFail = false;
    this.userFail = false;
    // if ( !reg.email) { this.userFail = true; }
    // if ( !reg.password) { this.passFail = true; }
    if (reg.email && reg.password) {
      this.service.login(reg.email, reg.password)
        .then((res) => {
          if (res.status === 401) {
            this.loginFailed = true;
          } else {
           res.json()
             .then(user => {
               if (user.type === 'ADMIN') {
                 this.router.navigate(['/admin']);
               }
               if (user.type === 'INSTRUCTOR') {
                 this.router.navigate(['/instructor']);
               }
               if (user.type === 'APPLICANT') {
                 this.router.navigate(['/applicant']);
               }
             })
            this.router.navigate(['profile']);
          }
        });
    }
  }
  ngOnInit() {
  }

}
