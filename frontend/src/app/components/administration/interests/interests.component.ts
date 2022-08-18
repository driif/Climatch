import { Component, OnInit } from '@angular/core';
import {AdministrationService} from "../../../shared/administration.service";
import {Interest} from "../../../classes/interest";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  interests: Interest[] = [];

  constructor(private admin: AdministrationService) { }

  ngOnInit(): void {
    this.getInterests().subscribe(interests => this.interests = interests);
  }

  getInterests() {
    return this.admin.getInterests();
  }
}
