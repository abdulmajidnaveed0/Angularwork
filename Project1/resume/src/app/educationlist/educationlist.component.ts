import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-educationlist',
  templateUrl: './educationlist.component.html',
  styleUrls: ['./educationlist.component.css']
})
export class EducationlistComponent implements OnInit {

  @Input() education:any[]=[];//Array<Object>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
