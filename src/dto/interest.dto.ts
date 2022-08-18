import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class InterestDto {
  @IsNumber()  
  @IsNotEmpty()
  id: number;  

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  checked: boolean;

  @IsArray()
  focus: string[];
}