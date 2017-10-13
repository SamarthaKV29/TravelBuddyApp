export class User {
  _id?: string;
  username: string;
  created: {
      date: Date;
  };
  roles: Array<string>;
  password: string;
  email: string;
  phone: string;
  name: string;
  profileData: {};
}

