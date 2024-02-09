import { Component,OnInit } from '@angular/core';
import { SignupComponent } from "../signup/signup.component";
import { ForgottenaccountComponent } from "../forgottenaccount/forgottenaccount.component";
import { SettingsComponent } from "../settings/settings.component";
import { InfoComponent } from "../info/info.component";
import { LoginComponent } from '../login/login.component';


@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [SignupComponent, LoginComponent, ForgottenaccountComponent, SettingsComponent, InfoComponent]
})
export class HomepageComponent {

}
