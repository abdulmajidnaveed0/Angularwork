import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from './loginauth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {

  constructor(private authService: LoginAuthService, 
    private router: Router) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> | any{
      console.log('loginguard/canActivate');
      return this.authService.isAuthenticatedAdmin().then(  (auth) => {
        if (auth==='admin') {
          return true;
        } else {
          console.log('guard user away');
          this.router.navigate(['/home']);
          return false;
        }
      }, (auth)=>{
        console.log('guard rejected:',auth)
        this.router.navigate(['/login']);

    }   );
    }
  
}
