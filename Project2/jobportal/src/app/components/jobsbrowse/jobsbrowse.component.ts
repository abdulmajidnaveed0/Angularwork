import { Component, OnInit,OnDestroy,AfterContentInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {Job} from '../../models/job.model';
import { JobserviceService } from '../../services/jobservice.service';

@Component({
  selector: 'app-jobsbrowse',
  templateUrl: './jobsbrowse.component.html',
  styleUrls: ['./jobsbrowse.component.css']
})
export class JobsbrowseComponent implements OnInit {

  constructor(private jobService: JobserviceService) { }

  ngOnInit(): void {
    this.retrieveJobs();
  }
  ngAfterViewInit(): void {
    // console.log('6. ngAfterViewInit');
  }

  searchTitle:string=""
  searchId:string=""
  searchCategory:string="all"

  jobsList?: Job[];
  currentJob?: Job;
  currentIndex=-1;

  updateView():void {
    this.getFilteredJobs();
  }
  filteredJobsList?:Job[]
  getFilteredJobs():void {
    if (this.searchCategory==="all" && this.searchTitle==="" && this.searchId===""){
      this.filteredJobsList = this.jobsList?.slice();
    }
    else if(this.searchCategory==="all") {
      this.filteredJobsList = this.jobsList?.slice().filter(
        (j) => 
          (j.jobid?.toString().toLowerCase())!.indexOf(this.searchId.toLowerCase()) >-1 && 
          (j.jobtitle?.toLowerCase())!.indexOf(this.searchTitle.toLowerCase())>-1
      )
    }
    else { // if (this.searchCategory!=="all")
      this.filteredJobsList = this.jobsList?.slice().filter(
        (j) => 
          j.category?.toLowerCase()===this.searchCategory.toLowerCase() && 
          (j.jobid?.toString().toLowerCase())!.indexOf(this.searchId.toLowerCase()) >-1 &&
          (j.jobtitle?.toLowerCase())!.indexOf(this.searchTitle.toLowerCase())>-1
      )
    }
    //console.log('alljobs',this.jobsList);
    //console.log('filtered jobs',this.filteredJobsList);
  }

  tempjobsl:any
  retrieveJobs(): void {
    //console.log('jobsbrowse/retrieveJobs start')
    this.tempjobsl = 
    this.jobService.getAllJobs().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.jobsList = data;
      //console.log('jobsbrowse/retrieveJobs jobslist: ',this.jobsList);
      this.getFilteredJobs();
    });
  }

  /*
  ngOnDestroy(): void {
    console.log('7. ngOnDestroy');
    this.tempjobsl.unsubscribe();
  }
  // */
}
