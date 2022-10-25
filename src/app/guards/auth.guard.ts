import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppToastService } from 'src/app/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastService: AppToastService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.authService.isLoggedIn()) {
        return true
      } else {
        this.toastService.show('Atenção', 'Autentifique-se antes de acessar esta página')
        this.router.navigateByUrl('/login')
        return false
      }
  }
  
}
