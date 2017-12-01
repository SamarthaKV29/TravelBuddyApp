export class User {
  _id?: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  name: string;
  profileData: {
    created: Date;
    url: string;
    gender: string;
    bio: string;
    profilePic: string;
  };
};

