import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { AlertService } from '../../webcomponents/alert/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  registerUser() {
    this.authService
      .signUp(
        new User(this.signupForm.value.email, this.signupForm.value.password),
      )
      .subscribe({
        next: (res) => {
          if (res.access_token != null) {
            this.signupForm.reset();
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.alertService.error(err);
        },
      });
  }
}
