//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { JobserviceService } from '../../services/jobservice.service';
import {Job} from '../../models/job.model';



@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  @Input() job?: Job;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentJob: Job = {
    jobid:"",
    jobtitle:"",
    category:"",
    published: false
  };
  message = '';

  constructor(private jobService: JobserviceService) { }

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentJob = { ...this.job };
  }

  updatePublished(status: boolean): void {
    if (this.currentJob.key) {
      this.jobService.updateJob(this.currentJob.key, { published: status })
      .then(() => {
        this.currentJob.published = status;
        this.message = 'The status was updated successfully!.';
      })
      .catch(err => console.log(err));
    }
  }

  updateJob(): void {
    const data = {
      // title: this.currentJob.title,
      // description: this.currentJob.description,
      jobid:this.currentJob.jobid,
      jobtitle:this.currentJob.jobtitle,
      category:this.currentJob.category,

    };

    if (this.currentJob.key) {
      this.jobService.updateJob(this.currentJob.key, data)
        .then(() => this.message = 'The job was updated successfully!.')
        .catch(err => console.log(err));
    }
  }

  deleteJob(): void {
    if (this.currentJob.key) {
      this.jobService.deleteJob(this.currentJob.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The job was delete-updated successfully!.';
        })
        .catch(err => console.log(err));
    }
  }

}
