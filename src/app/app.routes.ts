
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { AboutComponent } from './about/about.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: StartseiteComponent }, // Standardroute
  { path: 'about', component: AboutComponent },
  { path: 'warenkorb', component: WarenkorbComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

export class AppRoutingModule { }
