import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent {
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 51, lng: 13},
    zoom: 8,
  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=<key>', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
   }

   
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) this.markerPositions.push(event.latLng.toJSON());    
  }
}
