export class Pal {
    _id: String;
    userID: String;
    palsemail: String[];

    constructor(user, pals, req) {
        this.userID = user;
        this.palsemail = pals;
    }
}
