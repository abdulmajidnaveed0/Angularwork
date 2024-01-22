import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  // @Input() experiencekey:string="";
  // @Input() experiencevalue:string="";

  @Input() company:string="";
  @Input() duration:string="";
  @Input() title:string="";
  @Input() description:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
