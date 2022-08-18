// Description to a user's profile-form (e.g. first name, last name, interests, etc.)

import {Role} from "./role";
import {Interest} from "./interest";

export class Profile {
  constructor(
    public userId: number,
    public firstname: string,
    public lastname: string,
    public interests?: Interest[], // array of Interest
    public roles?: Role[], // Role
    public bio?: string,
    public location?: Location,
    public city?: string,
  ) {
  }
}
