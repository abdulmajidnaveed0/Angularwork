import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginAuthService} from '../services/loginauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: LoginAuthService) {
  }
  
  inputUsername:string=""
  inputPassword:string=""

  ngOnInit(): void { 
  }

  login(){
    //// do auth, if successful, only then proceed
    this.auth.authenticateUserFromApi(this.inputUsername,this.inputPassword).then(
    //this.auth.login(this.inputUsername,this.inputPassword).then(
      (fulfilledvalue)=>{
        this.showMessage(this.messages.loginsuccessful);
        this.resetForm()
        setTimeout(() => {          
          if (fulfilledvalue==='admin') {
            this.router.navigateByUrl('/admin'); }
          else {
            this.router.navigateByUrl('/home');
          }
        }, 1000);
      }, 
      (rejectreason)=>{
        console.log('login failed',rejectreason)
        this.resetForm()
        this.showMessage(this.messages.loginfailed)
        this.router.navigateByUrl('/login')
      }
    );
  }
  logout(){
    this.showMessage(this.messages.logout);
    this.auth.logout();
  }

  showMessage(msg:string){
    this.message=msg;
    setTimeout(()=> {
      this.message=""
    },1000)
  }
  message="";
  messages = {
    loginsuccessful: "Login successful.",
    loginfailed: "Login failed. Please try again.",
    logout: "Logged out."
  }
  resetForm(){
    this.inputUsername=""
    this.inputPassword=""
  }
}
