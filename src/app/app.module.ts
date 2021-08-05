import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EligibilityVehicleComponent } from './eligibility-vehicle/eligibility-vehicle.component';
import { EligibilityApplicationComponent } from './eligibility-application/eligibility-application.component';
import { ApplicationPersonalComponent } from './application-personal/application-personal.component';
import { ApplicationVehicleComponent } from './application-vehicle/application-vehicle.component';
import { ApplicationFilesComponent } from './application-files/application-files.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EligibilityVehicleComponent,
    EligibilityApplicationComponent,
    ApplicationPersonalComponent,
    ApplicationVehicleComponent,
    ApplicationFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
