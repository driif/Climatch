import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AlertService } from 'src/app/webcomponents/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // eslint-disable-next-line @typescript-eslint/ban-types
  currentUser: {} = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private alertService: AlertService,
  ) {}

  // SignUp
  signUp(user: User): Observable<any> {
    const api = this.endpoint + 'auth/signup';
    return this.http.post(api, user);
  }

  // SignIn
  signIn(user: User) {
    const api = this.endpoint + 'auth/signin';
    return this.http.post(api, user, { headers: this.headers }).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.getUserProfile().subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/edit-profile']);
        });
      },
      error: (err) => {
        this.alertService.error(err);
      },
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  logout(): void {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  getUserProfile(): Observable<any> {
    const api = this.endpoint + 'users/me';
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
    );
  }
}
