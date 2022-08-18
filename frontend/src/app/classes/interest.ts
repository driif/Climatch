import {CheckboxElement} from "../interfaces/checkboxElement";

export class Interest implements CheckboxElement{
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public checked: boolean,
    public focus: String[]
  ) {
  }
}
