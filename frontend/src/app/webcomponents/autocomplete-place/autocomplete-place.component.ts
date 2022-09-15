import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete-place',
  templateUrl: './autocomplete-place.component.html',
  styleUrls: ['./autocomplete-place.component.scss']
})
export class AutocompletePlaceComponent {
  title = 'rou';
  //Local Variable defined
  userLatitude = "";
  userLongitude = "";
  userAddress = "";

  public AddressChange(address: any) {
    //setting address from API to local variable
    this.userAddress = address.formatted_address;
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
  }
}
