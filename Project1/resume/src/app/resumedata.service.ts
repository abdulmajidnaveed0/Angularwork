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
        aboutme: 'Hello! I am Abdul Majid Naveed. I am a Software Engineer with three years of experience. I have worked with C#, ASP.NET Core, Angular and SQL Server.',
        basicinformation: {
          email: 'abdulmajidnaveed01@gmail.com',
          address: 'GTA, Ontario, Canada',
          phone: '1416-123-4567'
        },
        
      },
      professionalskills: [ 
        {key: 'HTML', value: 80},
        {key:'JavaScript', value: 60},
        {key:'C#',value: 80},
        {key:'SQL',value: 80},
        {key:'Angular',value: 70},
        {key:'CSS',value:60}
      ],
      workexperience: [
        {
          company: 'Company C1',
          duration: 'Jan 2016 - Jun 2016',
          title: 'Software Engineer',
          description: 'Worked as a software engineer on various projects. Developed various features. Description of job work experience.'
        },
        {
          company: 'Company C2',
          duration: 'Jun 2016 - Jun 2017',
          title: 'Software Engineer',
          description: 'Worked as a software engineer on various projects. Developed various features. Description of job work experience. (second job work describe)'
        },
        {
          company: 'Company C3',
          duration: 'Feb 2018 - Jun 2020',
          title: 'Software Engineer',
          description:  'Worked as a software engineer on various projects. Developed various features. Description of job work experience. (third job work describe)'
        },
      ],
      education: [
        {
          degree: 'Masters Degree',
          duration: '2014 - 2015',
          title: 'Masters of Science in Computer Science',
          description: 'Georgia Institute of Technology, Atlanta, GA, USA'
        },
        {
          degree: 'Masters Degree',
          duration: '2008 - 2010',
          title: 'Masters of Science in Electrical and Computer Engineering',
          description: 'Georgia Insitute of Technology, Atlanta, GA, USA'
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
