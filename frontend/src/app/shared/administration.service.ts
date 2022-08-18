import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  endpoint = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getInterests(): Observable<any> {
    return this.http.get(this.endpoint + 'administration/interests');
  }

  getRoles(): Observable<any> {
    return this.http.get(this.endpoint + 'administration/roles');
  }
}
