import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';  // firebase
import {AngularFireModule} from '@angular/fire/compat';   // firebase
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/compat/database';
import { JobslistComponent } from './components/jobslist/jobslist.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { AddjobComponent } from './components/addjob/addjob.component';
//import { BasicApiComponent } from './components/basic-api/basic-api.component';
import { JobsbrowseComponent } from './components/jobsbrowse/jobsbrowse.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    JobslistComponent,
    JobdetailsComponent,
    AddjobComponent,
    //BasicApiComponent,
    JobsbrowseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // firebase
    AngularFireDatabaseModule, // firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
https://firebase.google.com/docs/web/setup#add-sdk-and-initialize
https://firebase.google.com/docs/database/web/start
https://www.bezkoder.com/angular-14-firebase-crud/
https://betterprogramming.pub/how-to-create-and-configure-a-firebase-and-angular-project-9305c40ee308

// https://www.bezkoder.com/angular-14-firebase-crud/
// first video from YouTube / Tania's channel 
//  https://www.youtube.com/watch?v=O0uVYhRE850

// first hit, this is with Firestore 
// https://www.bezkoder.com/integrate-firebase-angular-15/


*/