import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export class LoginGuard {
  static canActivate( ): CanActivateFn {
    const sessionToken = sessionStorage.getItem('sessionToken');

    return async () => {
      const router = inject(Router);
      return sessionToken ? true : router.navigate(['login']);
    };
  }
}
