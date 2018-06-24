import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from './services/user.service.client';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { AdminInstructorsPannelComponent } from './admin-instructors-pannel/admin-instructors-pannel.component';
import {InstructorServiceClient} from './services/instrcutor.service.client';
import { AdminSchoolModuleComponent } from './admin-school-module/admin-school-module.component';
import {SchoolServiceClient} from './services/school.service.client';
import { AdminApplicantModuleComponent } from './admin-applicant-module/admin-applicant-module.component';
import {ApplicantServiceClient} from './services/applicant.service.client';
import { AdminCourseModuleComponent } from './admin-course-module/admin-course-module.component';
import {CourseServiceClient} from './services/course.service.client';
import { ProfileComponent } from './profile/profile.component';
import {AdminServiceClient} from './services/admin.service.client';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { InstructorPositionComponent } from './instructor-position/instructor-position.component';
import {PositionServiceClient} from './services/position.service.client';
import { PositionGridComponent } from './position-grid/position-grid.component';
import { PositionPageComponent } from './position-page/position-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorpageComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    AdminPannelComponent,
    AdminInstructorsPannelComponent,
    AdminSchoolModuleComponent,
    AdminApplicantModuleComponent,
    AdminCourseModuleComponent,
    ProfileComponent,
    InstructorHomeComponent,
    InstructorPositionComponent,
    PositionGridComponent,
    PositionPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    UserServiceClient,
    InstructorServiceClient,
    SchoolServiceClient,
    ApplicantServiceClient,
    CourseServiceClient,
    AdminServiceClient,
    PositionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
