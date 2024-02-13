import { Component } from '@angular/core';

import { JobserviceService } from './jobservice.service';
//import { OnInit,SimpleChanges } from '@angular/core';
import {
  AfterContentInit,  AfterViewInit,  DoCheck,  Input,  OnChanges,
  OnDestroy,  OnInit,  SimpleChanges,
} from '@angular/core';

//import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { UserService } from './user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: any[]=[];
  title = 'jobportal';

  users2$: Observable<any>=new Observable<any>();//Observable.;
  error = false;


  constructor(private jobService: JobserviceService){
    console.log('1. constructor'); 
    //let users2$=of([]);
  }
  ngOnInit(){
    this.users=this.jobService.getUsers();
    console.log('3. OnInit');

    this.users2$ = this.jobService.getUsers2().pipe(
      catchError(() => {
        this.error = true;
        return EMPTY;
      })
    );

  }
  ngDoCheck(): void {
    console.log('4. DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. OnChanges');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('7. ngOnDestroy');
  }
}
