//import {IJob} from './iJob';
export class Job {
    key?:string|null;
    category?:string="FullStack"; 
    jobtitle?:string="";
    jobid?: string="";
    //jobid?: number=0;
    published?:boolean;
    public constructor(init?:Partial<Job>) {
        Object.assign(this, init);
    }
}

// https://stackoverflow.com/questions/14142071/typescript-and-field-initializers

