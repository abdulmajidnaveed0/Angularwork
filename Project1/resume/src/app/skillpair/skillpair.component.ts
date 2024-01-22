import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-skillpair',
  templateUrl: './skillpair.component.html',
  styleUrls: ['./skillpair.component.css']
})
export class SkillpairComponent implements OnInit {
  @Input() skillkey:string="";
  @Input() skillvalue:string="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
