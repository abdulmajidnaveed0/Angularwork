import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcometop',
  templateUrl: './welcometop.component.html',
  styleUrls: ['./welcometop.component.css']
})
export class WelcometopComponent implements OnInit {

  //@Input() myname:string ="";
  //@Input() mydescription:string="";
  @Input() welcome:any ={};

  photoproperty = 'assets/resumephoto2.jpg';

  constructor() {  }

    
  ngOnInit(): void {
  }


}
