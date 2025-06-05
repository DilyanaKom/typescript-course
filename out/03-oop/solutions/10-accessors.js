"use strict";
class UserProfile {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error('Username must me minimum 3 characters!');
        }
        this._username = newUsername;
    }
}
const user1 = new UserProfile("Martin");
user1.username = "johnDoe";
console.log(user1.username);
//# sourceMappingURL=10-accessors.js.map