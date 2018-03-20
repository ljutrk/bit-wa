class User {
    constructor(user) {
        this.name = user.name;
        this.picture = user.picture;
        this.email = user.email;
        this.dob = user.dob;
    }

    getDateOfBirth(dob) {
        const date = new Date(dob);

        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    hideEmailAddress(email) {
        const firstThree = email.substring(0, 3) + "...";
        const afterMonkey = email.split('@')[1]
        const lastTwoBeforeMonkey = email.split('@')[0].slice(-3) + "@";
        const hiddenEmail = firstThree + lastTwoBeforeMonkey + afterMonkey;

        return hiddenEmail;
    }
}

export default User;