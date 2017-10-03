export class User {
  _id?: string;
  provider: "local";
  username: string;
  created: {
      $date: Date;
  };
  roles: Array<string>;
  profileImageURL: string;
  password: string;
  email: string;
  phone: {
    mobile: string,
    work: string
  };
  name: string;
}

