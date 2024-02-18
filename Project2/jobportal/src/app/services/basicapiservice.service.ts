import { Injectable } from '@angular/core';


//import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
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
// https://www.bezkoder.com/angular-14-firebase-crud/



//interface User { username: string; }
//import { User } from './app.component'; // from 'src/app/app.component'
//import {job} from 'models/job.model';
import { User } from './../models/user.model';
//import { Job } from './models/job.model';
import {Job} from './../models/job.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class BasicapiserviceService {

//   constructor() { }
// }


@Injectable({  providedIn: 'root'})
export class BasicapiserviceService {

  constructor(private http: HttpClient,  
                        private db2: AngularFireDatabase) {
    this.app = initializeApp(environment.firebaseConfig);
    this.listenToUsers();

    this.jobsRef=db2.list(this.jobsPath);
    this.usersRef=db2.list(this.usersPath);
   }


  getUsers() {
    return [
      { id: 1, name: 'Jane', age: 30 },
      { id: 2, name: 'Jim', age: 22 },
      { id: 3, name: 'Kim', age: 23 },
    ];
  }

  getUsers2(): Observable<any> {
    return this.http
      .get('https://reqres.in/api/users', {
        headers: {
          'Content-Type': 'application/json',
          token: '1234',
        },
      })
      .pipe(
        map((res: any) => res.data),
        catchError(() => {
          console.log('handle error in service');
          return throwError(() => new Error('Some api error'));
        })
      );
  }

  app:any; //= initializeApp(environment.firebaseConfig);

  listenToUsers(){
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      console.log('new users', data);
    });
  }
  checkFirebaseRealtimeDatabaseWrite(uId:string, uname:string) {
    //let app = initializeApp(environment.firebaseConfig);
    let dbrealtime = getDatabase(this.app);
    // https://firebase.google.com/docs/database/web/read-and-write

    function writeUserData(userId:string, name:string,
       ) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name, isAdminUser: false
      });
    }
    writeUserData(uId,uname);
  }
  getFirebaseRtDbGetKey(key:string){
    console.log('Get');
    const dbRef = ref(getDatabase());
    //let key = "aa1";
    get(child(dbRef, key)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("key:", key, "retrieved: ", snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  checkFirebaseDoReadUsers() {
    
    const app = initializeApp(environment.firebaseConfig);

    // //Cloud Firestore Lite SDK  
    // // https://firebase.google.com/docs/web/setup#add-sdk-and-initialize
    // const db0 = getFirestore(app);
    // // Get a list of cities from your database
    // async function getCities(db:any) {
    //   const citiesCol = collection(db, 'users');
    //   const citySnapshot = await getDocs(citiesCol);
    //   console.log('c:',citySnapshot);
    //   const cityList = citySnapshot.docs.map(doc => doc.data());
    //   return cityList;
    // }
    // //return getCities(db0);
    // let c = await getCities(db0);
    // console.log('list: ',c);
    this.getFirebaseRtDbGetKey("users");

  }

// ==================================================================

  //interface User { username: string; };
  //usersFromDb:any// Observable<User[]>=new Observable<  User[] >();

  //Observable<Array<User>>();

// https://www.bezkoder.com/angular-14-firebase-crud/

  private usersPath = '/users';
  private jobsPath = '/jobs';
  jobsRef: AngularFireList<Job>;
  usersRef: AngularFireList<User>;
  getAllJobs():AngularFireList<Job> {
    return this.jobsRef;
  }
  createJob(tutorial: Job): any {
    return this.jobsRef.push(tutorial);
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




  checkFbRetrieve(){
    let userslist = this.db2.object('users');
    //let a1 = userslist.snapshotChanges();
    let a2 = userslist.valueChanges();
    let userslist2 = this.db2.list('users');
    let jobs = this.db2.list('jobs'); 
    //this.usersFromDb=userslist;
    let userslistnew = this.db2.list('users').valueChanges();

    userslist.valueChanges().subscribe(
      (data:any) => {
        console.log('userslist:',data)
      },
      (err) => console.log(err),
      () => console.log("completed!")
    )
    jobs.valueChanges().subscribe(
      (data:any) => {
        console.log('jobslist:',data)
      },
      (err) => console.log(err),
      () => console.log("completed!")
    )
    return userslistnew;//userslist2;
  }
  checkFbUpdate(){

  }
  checkFbDelete(){

  }    
  getUsersFromRtDb():Observable<any[]>{
    let userslist = this.db2.list('users').valueChanges();
    return userslist;
  }
  getJobsFromRtDb():Observable<any[]>{
    let jobslist = this.db2.list('jobs').valueChanges();
    return jobslist;
  }
  PushToDb(){
    //this.db2.list('users').push({username: "xyz"});
    let j = new Job();
    j= new Job({category:"backend",jobid:"4",jobtitle:"swe"});
    this.db2.list('jobs').push(j);
  }
  



}


/*

$ npm install firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgIE-8nigc_nFfMicCP7nfQsD3ilNb5XA",
  authDomain: "angular-9bbee.firebaseapp.com",
  projectId: "angular-9bbee",
  storageBucket: "angular-9bbee.appspot.com",
  messagingSenderId: "999925519047",
  appId: "1:999925519047:web:27eed3b4a9b36e9a72a4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


*/