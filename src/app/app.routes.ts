import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { AboutComponent } from './about/about.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: '', component: StartseiteComponent },
  { path: 'about', component: AboutComponent },
  { path: 'warenkorb', component: WarenkorbComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//@Component({
//selector: 'app-root‘,
//imports: [RouterOutlet, RouterLink, RouterLinkActive],
//templateUrl: './app.component.html‘,
//styleUrls: ['./app.component.css‘]})
//export class AppComponent {
//title = 'routing-app‘;
//}