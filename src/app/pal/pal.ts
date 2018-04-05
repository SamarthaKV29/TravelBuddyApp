export class Pal {
    _id: String;
    userID: String;
    pals: Array<Pal>;
    req: String;

    constructor(user, pals, req) {
        this.userID = user;
        this.pals = pals;
        this.req = req;
    }
}
