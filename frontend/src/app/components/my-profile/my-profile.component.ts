import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  me?: Profile;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getProfile().subscribe((profile) => {
      this.me = profile;
      this.me.firstname = profile.firstname;
      this.me.lastname = profile.lastname;
    });
  }

  getProfile(): Observable<Profile> {
    return this.authService.getUserProfile();
  }
}
