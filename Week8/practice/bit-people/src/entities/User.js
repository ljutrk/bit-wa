class User {
    constructor(user) {
        this.gender = user.gender;
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.picture = user.picture.large;
        this.dateOfBirth = this.getDateOfBirth(user.dob);
        this.email = this.hideEmailAddress(user.email);
    }

    getDateOfBirth(DateOfBirth) {
        const date = new Date(DateOfBirth);

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

export { User };