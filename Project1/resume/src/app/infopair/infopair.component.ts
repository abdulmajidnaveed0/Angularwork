import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infopair',
  templateUrl: './infopair.component.html',
  styleUrls: ['./infopair.component.css']
})
export class InfopairComponent implements OnInit {

  //@Input() infopair:any={};
  @Input() infokey:string="";
  @Input() infovalue:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
