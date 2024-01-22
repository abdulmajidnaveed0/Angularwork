import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumedataService {

  constructor() { }

  getResumeData() {

    let resumeData = {
      welcome: { 
      name: 'Abdul Majid Naveed', 
      professionaldescription: 'Software Engineer',
      },
      about: {
        aboutme: 'Hello! I am ABdul Majid NaVEED.. aboutme text',
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
          duration: '2014 - 2015',
          title: 'Masters of Science in Computer Science',
          description: 'Georgia Institute of Technology'
        },
        {
          degree: 'Masters Degree',
          duration: '2008 - 2010',
          title: 'Masters of Science in Electrical Engineering',
          description: 'Georgia Insitute of Technology'
        },
        {
          degree: 'Bachelors Degree',
          duration: '2003 - 2007',
          title: 'Bachelors of Science in Electrical Engineering',
          description: 'University of Engineering and Technology Lahore'
        },
      ],
    };
  
    return resumeData;

    // return {
    //   data: 'abc'
    // };
  }
  
}
