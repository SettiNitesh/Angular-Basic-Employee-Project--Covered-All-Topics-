import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  router: Router = inject(Router);

  onLogin(): void {
    if (
      this.loginObj.email == 'user@byteridge.com' &&
      this.loginObj.password == 'Test@123'
    ) {
      this.router.navigateByUrl('/client');
      localStorage.setItem('cred', this.loginObj.email);
    } else {
      alert('Invalid Credentials');
    }
  }
}
