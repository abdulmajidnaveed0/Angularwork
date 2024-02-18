import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginAuthService} from '../services/loginauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
     private auth: LoginAuthService) {
      this.authout=auth;
      }
  
  inputUsername:string=""
  inputPassword:string=""

  ngOnInit(): void {
  }
  authout:any
  login(){
    //console.log('do login...')
    this.auth.authenticateUserFromApi(this.inputUsername,this.inputPassword).then(
    //this.auth.login(this.inputUsername,this.inputPassword).then(
      (value)=>{
        //console.log('login succeeded:',value)
        this.showMessage(this.messages.loginsuccessful);
        this.resetForm()
        setTimeout(() => {          
          if (value==='admin') {
            this.router.navigateByUrl('/admin'); }
          else {
            this.router.navigateByUrl('/home');
          }
        }, 1000);
      }, 
      (reasonreject)=>{
        console.log('login failed',reasonreject)
        this.resetForm()
        this.showMessage(this.messages.loginfailed)
        this.router.navigateByUrl('/login')
      }
    );
    //console.log('end of login')
    // do auth, if successful, only then proceed
  }
  logout(){
    //console.log('do logout');
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
  //showauth(){console.log(this.auth, this.auth.loggedIn)};
  // clearinputs(){
  //   this.inputUsername="";this.inputPassword="";
  // }

}
