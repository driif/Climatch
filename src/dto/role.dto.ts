import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class RoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  checked: boolean;
}