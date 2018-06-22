import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
import {LoginComponent} from './login/login.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminPannelComponent} from './admin-pannel/admin-pannel.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/:type', component: AdminHomeComponent},
  {path: '**', component: ErrorpageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
