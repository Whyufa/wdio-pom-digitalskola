import Page from "./page.js";
import { $ } from "@wdio/globals";

class LoginPage extends Page {
    open(path) {
        return super.open("");
    }

    get textBoxUsername() {
        return $('#user-name');
    }

    get textBoxPassword() {
        return $("#password");
    }

    get buttonLogin() {
        return $("#login-button");
    }

    async login(username, password) {
        await this.textBoxUsername.setValue(String(username));
        await this.textBoxPassword.setValue(String(password));
        await this.buttonLogin.click();
    }
}

export default new LoginPage();
