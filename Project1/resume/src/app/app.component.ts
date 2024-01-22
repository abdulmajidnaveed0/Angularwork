import { Component, OnInit, VERSION } from '@angular/core';
import {ResumedataService} from './resumedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   implements OnInit { 

  constructor(private resumesrvc: ResumedataService ) {}
  
  title = 'resume';
  angularversion = 'Angular' + VERSION.major;

  servicedata:any;

  ngOnInit() {
    this.servicedata = this.resumesrvc.getResumeData();
    this.resumeData = this.servicedata;
  }
  resumeData:any;

  /*
  resumeData = {
    welcome: { 
    name: 'Abdul Majid Naveed', 
    professionaldescription: 'Software Engineer',
    },
    about: {
      aboutme: 'Hello I am ABdul Majid NaVEED.. aboutme text',
      basicinformation: {
        email: 'email@gg',
        address: 'GTA, Ontario Canada',
        phone: '14161234567'
      },
      
    },
    professionalskills: [ 
      {key: 'html', value: 80},
      {key:'javascript', value: 60},
      {key:'C#',value: 80},
      {key:'SQL',value: 80},
      {key:'Angular',value: 70},
    ],
    workexperience: [
      {
        company: 'Company C1',
        duration: 'jan 2016 to jun 2016',
        title: 'Software Engineer',
        description: 'first job work describe'
      },
      {
        company: 'Company C2',
        duration: 'jun 2016 to jun 2017',
        title: 'Software Engineer',
        description: 'second job work describe'
      },
      {
        company: 'Company C3',
        duration: 'feb 2018 to jun 2020',
        title: 'Software Engineeeer',
        description: 'third job work describe .....'
      },
    ],
    education: [
      {
        degree: 'Masters Degree',
        duration: '2014 to 2015',
        title: 'Masters of Science in Computer Science',
        description: 'Georgia Institute of Technology'
      },
      {
        company: 'Masters Degree',
        duration: '2008 to 2010',
        title: 'Masters of Science in Electrical Engineering',
        description: 'Georgia Insitute of Technology'
      },
      {
        company: 'Bachelors Degree',
        duration: '2003 to 2007',
        title: 'Bachelors of Science in Electrical Engineering',
        description: 'University of Engineering and Technology Lahore'
      },
    ],


  };  // */
}
