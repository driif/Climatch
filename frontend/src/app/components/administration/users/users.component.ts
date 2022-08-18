import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {User} from "../../../classes/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers().subscribe(users => users.forEach((user: any) => this.users.push(new User(user.email, ''))));
  }

  getUsers() {
    return this.userService.getUsers();
  }
}
