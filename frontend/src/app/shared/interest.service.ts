import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  endpoint = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getInterests(): Observable<any> {
    return this.http.get(this.endpoint + 'administration/interests');
  }
}
