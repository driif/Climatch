import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => console.log(users));
  }

}
