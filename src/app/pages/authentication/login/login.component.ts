import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    .form-control-password {
      position: relative;
      cursor: pointer;
      margin-top: -30px;
      margin-right: 10px;
  },
  `],
})
export class LoginComponent implements OnInit {
  password: boolean = false;
  loginForm: FormGroup;
  invalidCredentialMsg: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.authService.onLoginSuccess.next();
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

  login() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.authService.isUserAuthenticated(email, password)
      .subscribe(
        authenticated => {
          if (authenticated) {
            this.authService.onLoginSuccess.next('i am admin')
            let url = this.authService.getRedirectUrl();
            console.log('Redirected Url:' + url);
            console.log('loggedIn Successfully!!');
            this.router.navigate([url]);
            this.snackBar.open('loggedIn Successfully!', 'Got it!', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            });
          } else {
            this.invalidCredentialMsg = 'Invalid Credentials. Try Again.';
          }
        }
      );
  }
}


