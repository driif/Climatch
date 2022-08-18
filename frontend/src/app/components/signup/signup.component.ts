import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import { User } from '../../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.signUp(new User(this.signupForm.value.email, this.signupForm.value.password)).subscribe((res) => {
      if (res.status === "201") {
        console.log(res);
        this.signupForm.reset();
        this.router.navigate(['/login']);
      }
    });
  }
}
