import { Component, OnInit } from '@angular/core';


import { JobserviceService } from '../../services/jobservice.service';

import { Observable, EMPTY } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import {Job} from '../../models/job.model';


@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  constructor(private jobService: JobserviceService) { }

  ngOnInit(): void {
    this.retrieveJobs();
  }

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
      console.log('jobslist: ',this.jobsList);
    });
  }
  setActiveJob(job: Job, index: number): void {
    //console.log(this.currentIndex,index);
    if (!this.currentJob){ 
    this.currentJob = job;
    this.currentIndex = index;}
    else {if (this.currentIndex===index) {
      this.currentJob=undefined;this.currentIndex=-1;
    } else {
    this.currentJob = job;
    this.currentIndex = index;}
    }
  }
  refreshList(): void {
    this.currentJob = undefined;
    this.currentIndex = -1;
    this.retrieveJobs();
  }
  removeAllJobs(): void {
    this.jobService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
