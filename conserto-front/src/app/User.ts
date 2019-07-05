export class User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password: string;


  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
}
}
