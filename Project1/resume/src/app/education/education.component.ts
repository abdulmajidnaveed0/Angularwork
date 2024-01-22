import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  // @Input() educationkey:string="";
  // @Input() educationvalue:string="";

  @Input() degree:string="";
  @Input() duration:string="";
  @Input() title:string="";
  @Input() description:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
