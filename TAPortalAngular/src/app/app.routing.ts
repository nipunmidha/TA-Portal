import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
import {LoginComponent} from './login/login.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminPannelComponent} from './admin-pannel/admin-pannel.component';
import {ProfileComponent} from './profile/profile.component';
import {InstructorHomeComponent} from './instructor-home/instructor-home.component';
import {InstructorPositionComponent} from './instructor-position/instructor-position.component';
import {PositionPageComponent} from './position-page/position-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent},
  {path: 'instructor', component: InstructorHomeComponent},
  {path: 'instructor/position', component: InstructorPositionComponent},
  {path: 'admin/:type', component: AdminHomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'position/:positionId', component: PositionPageComponent},
  {path: '**', component: ErrorpageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
