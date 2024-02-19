import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobserviceService } from '../../services/jobservice.service';
import {Job} from '../../models/job.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})

export class AddjobComponent implements OnInit {

  job: Job = new Job();
  submitted = false;
  //@ViewChild('f1') form: any;//ElementRef;
  
  constructor(private jobService: JobserviceService) { }

  signupForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        userjobtitle:new FormControl(null,Validators.required),
        userjobcategory:new FormControl('FullStack'),
        userjobid:new FormControl(null,Validators.required)
      })
    })
  }

  get jobtitleIsNotValid(){
    return (
      this.signupForm.get('userData.userjobtitle')?.touched && 
      !this.signupForm.get('userData.userjobtitle')?.valid
    );
  }

  idsNotAllowedList =['0','jobid']
  get jobIdIsNotValid(){
    // !signupForm.get('userData.userjobid')?.valid &&
    // signupForm.get('userData.userjobid')?.touched && 
    return (
      this.signupForm.get('userData.userjobid')?.touched && 
      !(this.signupForm.get('userData.userjobid')?.valid &&
      this.isValidId(this.signupForm.get('userData.userjobid')?.value))
    )
  }
  private isValidId(idvalue:string){
    let ret ;
    if (!idvalue || idvalue ===null) ret = false;
    else ret= this.idsNotAllowedList.indexOf(idvalue)===-1;
    return ret;
  }

  saveJob(): void {
    this.jobService.createJob(this.job).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
  newJob(): void {
    this.submitted = false;
    this.job = new Job();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(this.form);
  // }
  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value)
    this.job=new Job({
      category:this.signupForm.get('userData.userjobcategory')?.value,
      jobid:this.signupForm.get('userData.userjobid')?.value,
      jobtitle: this.signupForm.get('userData.userjobtitle')?.value
      }
    );
    this.signupForm.reset();  
    this.saveJob();
  }

}
