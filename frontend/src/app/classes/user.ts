export class User {
  constructor(
    public email: string | null | undefined,
    private password: string | null | undefined,
  ) {}
}
