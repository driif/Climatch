import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Profile } from "../../classes/profile";
import {Role} from "../../classes/role";
import {RoleService} from "../../shared/role.service";
import {CheckboxElement} from "../../interfaces/checkboxElement";
import {InterestService} from "../../shared/interest.service";
import {Interest} from "../../classes/interest";
import {AuthService} from "../../shared/auth.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../shared/user.service";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {FormControl} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  endpoint = environment.apiUrl;
  id: number = 0;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  interestCtrl = new FormControl('');

  interests: Interest[] = [];
  selectedInterests: Interest[] = [];
  roles: Role[] = [];
  checkedRoles: Role[] = [];
  model = new Profile('', '', this.selectedInterests, this.checkedRoles);
  submitted = false;

  @ViewChild('interestInput') interestInput?: ElementRef<HTMLInputElement>;

  constructor(
    private rolesService: RoleService,
    private interestService: InterestService,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.filteredInterests = this.interestCtrl.valueChanges.pipe(
      startWith(null),
      map((interest: string | null) => (interest ? this._filter(interest) : this.interests.slice())),
    );
  }

  ngOnInit(): void {
    this.getRoles();
    this.getInterests();
    this.getUserId();
  }

  onSubmit() {
    return this.http.post(`${this.endpoint}profile/${this.id}`, this.model).subscribe(data => console.log(data));
  }

  getRoles(): void {
    this.rolesService.getRoles()
      .subscribe(roles => this.roles = roles);
  }

  getInterests(): void {
    this.interestService.getInterests()
      .subscribe(interests => this.interests = interests);
  }

  addCheckedRoles (checkedElements: CheckboxElement[]) {
    this.model.roles = checkedElements;
  }

  getUserId(): void {
    this.userService.getMe().subscribe(data => this.id = parseInt(data.id));
  }

  remove(interest: Interest) {
    const index = this.selectedInterests.indexOf(interest);

    if (index >= 0) {
      this.selectedInterests.splice(index, 1);
    }
  };

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedInterests.push();
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  filteredInterests: Observable<Interest[]> = new Observable<Interest[]>();

  selected(event: MatAutocompleteSelectedEvent): void {
    this.interests.forEach(interest => {
      if( interest.name === event.option.viewValue ) this.selectedInterests.push(interest);
    });
    // @ts-ignore
    this.interestInput.nativeElement.value = '';
    this.interestCtrl.setValue(null);
  };

  private _filter(value: string): Interest[] {
    const filterValue = value.toLowerCase();

    return this.interests.filter(interest => interest.name.toLowerCase().includes(filterValue));
  }
}
