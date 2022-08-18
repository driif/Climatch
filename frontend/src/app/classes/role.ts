import {CheckboxElement} from "../interfaces/checkboxElement";

export class Role implements CheckboxElement {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public checked: boolean
  ) {
  }
}
