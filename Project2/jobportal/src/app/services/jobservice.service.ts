import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// firebase:
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';  // firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#add-sdk-and-initialize
// https://firebase.google.com/docs/database/web/start

// https://firebase.google.com/docs/database/web/read-and-write
import { getDatabase, ref, set } from "firebase/database";
import { child, get, onValue } from "firebase/database";
import { push, update } from "firebase/database";
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import {Job} from '../models/job.model';


@Injectable({  providedIn: 'root'})

export class JobserviceService {

  app:any; //= initializeApp(environment.firebaseConfig);

  constructor(private http: HttpClient,  
                        private db2: AngularFireDatabase) {
    this.app = initializeApp(environment.firebaseConfig);
    //this.listenToUsers();
    this.jobsRef=db2.list(this.jobsPath);
    //this.usersRef=db2.list(this.usersPath);
   }

  private usersPath = '/users';
  private jobsPath = '/jobs';
  jobsRef: AngularFireList<Job>;
  //usersRef: AngularFireList<User>;
  getAllJobs():AngularFireList<Job> {
    return this.jobsRef;
  }
  createJob(job: Job): any {
    return this.jobsRef.push(job);
  }
  updateJob(key: string, value: any): Promise<void> {
    return this.jobsRef.update(key, value);
  }
  deleteJob(key: string): Promise<void> {
    return this.jobsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.jobsRef.remove();
  }

}
