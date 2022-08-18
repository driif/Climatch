import { Component, OnInit } from '@angular/core';
import {Role} from "../../../classes/role";
import {AdministrationService} from "../../../shared/administration.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];

  constructor(private admin: AdministrationService) { }

  ngOnInit(): void {
    this.getRoles().subscribe(roles => this.roles = roles);
  }

  getRoles() {
    return this.admin.getRoles();
  }
}
