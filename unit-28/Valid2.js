class Valid2 extends Valid {
    constructor(email, password, isValid, emaiError, passwordError) {
        super(email, password, isValid)
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }

    validate() {

        if (this.email == "" || this.email == null) {
            this.isValid = false;
            this.emaiError = "email empty";
        } else if (this.password.length < 6) {
            this.isValid = false;
            this.passwordError = "min length 6";
        } else {
            this.isValid = true;
        }

    }
}

let valid2 = new Valid2("", "1234567");
valid2.validate();
console.log(valid2);

let valid3 = new Valid2("email@email.com", "1234567");
valid3.validate();
console.log(valid3);