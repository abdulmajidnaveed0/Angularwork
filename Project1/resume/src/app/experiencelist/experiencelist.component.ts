import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-experiencelist',
  templateUrl: './experiencelist.component.html',
  styleUrls: ['./experiencelist.component.css']
})
export class ExperiencelistComponent implements OnInit {


  @Input() experience:any[]=[];//Array<Object>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
