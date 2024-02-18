import { Component } from '@angular/core';

import { JobserviceService } from './services/jobservice.service';
//import { OnInit,SimpleChanges } from '@angular/core';
// import {
//   AfterContentInit,  AfterViewInit,  DoCheck,  Input,  OnChanges,
//   OnDestroy,  OnInit,  SimpleChanges,
// } from '@angular/core';

//import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
//import { UserService } from './user.service';

import { NgForm } from '@angular/forms';

import { User } from './models/user.model';
//import { Job } from './models/job.model';
import {Job} from './models/job.model';
//export interface User { username: string; }
//export interface Job {jobid: number,category:string,jobtitle:string}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'jobportal';
  users1: any[]=[];
  users2$: Observable<any>=new Observable<any>();//Observable.;
  error = false;

  constructor(private jobService: JobserviceService){
    //console.log('1. constructor');
    this.getFromDb();
    //let users2$=of([]);

  }
  ngOnInit(){
    /*
    console.log('3. OnInit');
    this.users1=this.jobService.getUsers();
    this.users2$ = this.jobService.getUsers2().pipe(
      catchError(() => {
        this.error = true;
        return EMPTY;
      })
    ); // */

    //this.retrieveJobs();

  }

  /*
  jobsList?: Job[];
  currentJob?: Job;
  currentIndex=-1;

  retrieveJobs(): void {
    this.jobService.getAllJobs().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.jobsList = data;
      console.log(this.jobsList);
    });
  }
  // */
  

  usersFromDb:any// Observable<User[]>=new Observable<  User[] >();
  jobsFromDb:any // Observable<any[]>;
  TestRetrieve(){
    this.usersFromDb = this.jobService.getAllJobs().snapshotChanges();

    // this.jobService.checkFbRetrieve();
    console.log('usersFromDb',this.usersFromDb);
  }
  TestUpdate(){
    this.usersFromDb=this.jobService.checkFbUpdate();
  }
  TestDelete(){
    this.jobService.checkFbDelete();
  }
  getFromDb(){
    this.usersFromDb = this.jobService.getUsersFromRtDb();
    this.jobsFromDb = this.jobService.getJobsFromRtDb();
  }
  TestPush(){
    this.jobService.PushToDb();
  }







  onB3ClickReadDbGetKey(key:string) {
    console.log('Clicked button ',key);
    //this.jobService.checkFirebaseRealtimeDatabaseWrite("u1","asf");
    this.jobService. getFirebaseRtDbGetKey(key);
    console.log('done');
  }
  user:any={
    name:"",username:"",jobdscr:""
  }
  readkey="";
  onB2ClickWriteDb(){
    console.log('B2 click')
    //this.jobService. getFirebaseRtDbGet();
    //this.jobService.checkFirebaseRealtimeDatabaseWrite("u1","asf2");
    this.jobService.checkFirebaseRealtimeDatabaseWrite(
      this.user.name,this.user.username);
  }
  onB1ClickReadUsers(){
    console.log('B1 click')
    this.jobService.checkFirebaseDoReadUsers();
  }









}
