import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgottenaccountComponent } from './components/forgottenaccount/forgottenaccount.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoComponent } from './components/info/info.component';
import { DatafetchComponent } from './components/datafetch/datafetch.component';


export const routes: Routes = [
{path: '', component: HomepageComponent},
{path:"login",component:LoginComponent},
{path:"settings",component:SettingsComponent},
{path:"signup",component:SignupComponent},
{path:"forgottenaccount",component:ForgottenaccountComponent},
{path:"dashboard",component:DashboardComponent},
{path:"homepage",component:HomepageComponent},
{path:"info",component:InfoComponent},
{path:"datafetch",component:DatafetchComponent}

];
