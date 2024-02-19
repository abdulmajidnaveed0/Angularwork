import { Component } from '@angular/core';

import { JobserviceService } from './services/jobservice.service';
//import { OnInit,SimpleChanges } from '@angular/core';
// import {
//   AfterContentInit,  AfterViewInit,  DoCheck,  Input,  OnChanges,
//   OnDestroy,  OnInit,  SimpleChanges,
// } from '@angular/core';

import { Observable, EMPTY } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'jobportal';
  constructor(private jobService: JobserviceService){
    //console.log('1. constructor');
  }
  ngOnInit(){
    /*
    console.log('3. OnInit');
    */
  }
}
