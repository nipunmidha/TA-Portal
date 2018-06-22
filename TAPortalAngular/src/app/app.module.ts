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
    AdminSchoolModuleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    UserServiceClient,
    InstructorServiceClient,
    SchoolServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
