import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import  {FormsModule} from "@angular/forms";

import { NavbarComponent } from './webcomponents/navbar/navbar.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { MyCheckboxComponent } from './webcomponents/my-checkbox/my-checkbox.component';
import { SigninComponent } from './components/signin/signin.component';
import {AuthInterceptor} from "./shared/authconfig.interceptor";
import { AdministrationComponent } from './components/administration/administration.component';
import { UsersComponent } from './components/administration/users/users.component';
import { InterestsComponent } from './components/administration/interests/interests.component';
import { RolesComponent } from './components/administration/roles/roles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { AlertComponent } from './webcomponents/alert/alert.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { MapModule } from './webcomponents/map/map.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AutocompletePlaceComponent } from './webcomponents/autocomplete-place/autocomplete-place.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ProfileFormComponent,
    MyCheckboxComponent,
    SigninComponent,
    AdministrationComponent,
    UsersComponent,
    InterestsComponent,
    RolesComponent,
    MyProfileComponent,
    AlertComponent,
    KontaktComponent,
    AutocompletePlaceComponent,
  ],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatAutocompleteModule,
		MatCheckboxModule,
		MatChipsModule,
		MatIconModule,
		MatMenuModule,
    MapModule,
    GooglePlaceModule,
	],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
