import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Kontakt } from '../../../../../src/interfaces/kontakt'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {
  endpoint = environment.apiUrl;

  @Input()
  profileId?: number;

  model = {} as Kontakt;

  constructor(private http: HttpClient) {}
  
  onSubmit() {
    return this.http.post(`${this.endpoint}kontakt/${this.profileId}`, this.model).subscribe(data => console.log(data));
  }
}
