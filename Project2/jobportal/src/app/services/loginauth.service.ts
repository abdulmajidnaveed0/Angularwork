import { Injectable, resolveForwardRef } from '@angular/core';

interface IAuth {
  authenticated: boolean,
  isAdmin: boolean,
  failed:boolean
}

@Injectable({ providedIn: 'root'})

export class LoginAuthService {
  loggedIn = false;
  isAdminUser=false;
  userName:string|null=null;

  constructor() { }

  authUserApi(inputUsername:string,inputPassword:string):Promise<IAuth> {
    let database:any = {
      abc: {isAdmin: false, passwordhash:""},
      admin: {isAdmin:true, passwordhash: ""},
    }
    let returnObject:IAuth;
    if (inputUsername in database) { returnObject = {
      authenticated:true, 
      isAdmin:database[inputUsername].isAdmin,
      failed:false }
    } else returnObject = {
      authenticated: false,
      isAdmin: false, failed:false,
    };
    return new Promise((resolve,reject) => {
      resolve(returnObject);
    })
  }
  
  authenticateUserFromApi(inputUsername:string,inputPassword:string) {
    return new Promise((resolve,reject)=> {
      setTimeout(() => {
         let validate= this.authUserApi(inputUsername,inputPassword).then(
          (onfulfilledValue)=>{
            if (onfulfilledValue.failed) {
              this.resetLoggedinState()
              reject("api failed");
            } else {
              if (!onfulfilledValue.authenticated) {
                this.resetLoggedinState()
                reject ("auth failed")
             } else {
                this.loggedIn=true; 
                this.userName=inputUsername;
              if (!onfulfilledValue.isAdmin) {
                  this.isAdminUser=false;
                  resolve('successful')
                } else {
                  this.isAdminUser=true;
                  resolve('admin')
                }
              }
            }
          },
           (rejectedreason:any)=>{
            reject('api failed')
           }
         )
      }, 100);
    })
  }

  // login(inputUsername:string,inputPassword:string) {
  //   console.log('loginauth/login')
  //   console.log(`user entered: ${inputUsername} ${inputPassword}`)
  //   return new Promise((resolve,reject) => {
  //     // send api call
  //     // to authenticate, and determine isAdminUser
  //     if (inputUsername=='abc') {
  //       this.loggedIn=true; this.userName=inputUsername;
  //       resolve('successful'); }
  //     else if (inputUsername=='admin'){
  //       this.loggedIn=true;this.userName=inputUsername;
  //       this.isAdminUser=true;
  //       resolve('admin');
  //     }
  //     else {
  //       this.loggedIn=false;
  //       reject("failed")}
  //   })
  // }
  logout() {
    this.resetLoggedinState()
  }
  isAuthenticatedAdmin(){
    //console.log('loginauth/isAuthenticatedAdmin')
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        //console.log(`loggedIn: ${this.loggedIn}, isAdmin: ${this.isAdminUser}`)
        if (this.loggedIn && this.isAdminUser) { 
          resolve('admin');
        } else if (this.loggedIn && !this.isAdminUser) {
          resolve('user')
        }
        else reject('not logged in');
      }, 0);
    });
    //console.log('end of isAuthenticatedAdmin')
    return promise;
  }
  private resetLoggedinState(){
    this.loggedIn = false;
    this.isAdminUser=false;
    this.userName=null;
  }
  // isAuthenticated()  {
  //   console.log('loginauth/isAuthenticated')
  //   const promise = new Promise((resolve, reject) => {

  //     setTimeout(() => {
  //       console.log('logged in',this.loggedIn)
  //       console.log('isAdmin',this.isAdminUser)
  //       resolve(this.loggedIn);
  //       //reject(0);

  //     }, 800);

  //   });
  //   console.log('end of isAuthenticated')
  //   return promise;
  // }

}
