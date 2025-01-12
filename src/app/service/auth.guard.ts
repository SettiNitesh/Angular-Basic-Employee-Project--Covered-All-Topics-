import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUser = localStorage.getItem('cred');

  const router: Router = inject(Router);

  if (localUser != null) {
    return true;
  }

  router.navigateByUrl('/login');

  return false;
};
