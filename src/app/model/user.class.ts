export class User{
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public repeatPassword?: any;

  constructor(firstName: string, lastName: string, username: string, password: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}
