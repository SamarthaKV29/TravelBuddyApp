export class User {
  _id: {
      $oid: string;
  };
  salt: string;
  displayName: string;
  provider: "local";
  username: string;
  created: {
      $date: Date;
  };
  roles: Array<string>;
  profileImageURL: string;
  password: string;
  email: string;
  lastName: string;
  firstName: string;
  __v: 0
}

