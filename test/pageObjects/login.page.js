import Page from './page.js';

const alertTitle =
  '//android.widget.TextView[@resource-id="android:id/alertTitle"]';
const alertMessage =
  '//android.widget.TextView[@resource-id="android:id/message"]';
const submitButton = '~button-LOGIN';
const loginButton = '~button-login-container';
const emailInput = '~input-email';
const passwordInput = '~input-password';
const OkButtonInModalWindow = 'android.widget.Button';
const errorTexts =
  '//android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView';

class LoginPage extends Page {
    
  async getAlertMessage() {
    return await super.getElement(alertMessage);
  }

  async getErrorMessage() {
    const errorTextElements = await $$(errorTexts);
    const allTexts = await Promise.all(
      errorTextElements.map((element) => element.getText())
    );
    return allTexts;
  }

  async clickOkButtonInModalWindow() {
    return await super.clickElement(OkButtonInModalWindow);
  }

  async getEmailInput() {
    return await super.getElement(emailInput);
  }

  async getPasswordInput() {
    return await super.getElement(passwordInput);
  }

  async clickLoginButton() {
    return await super.clickElement(loginButton);
  }

  async getAlertTitle() {
    return await super.getElement(alertTitle);
  }

  async getSubmitButton() {
    return await super.getElement(submitButton);
  }

  async clickSubmitButton() {
    return await super.clickElement(submitButton);
  }

  async login(email, password) {
    await (await this.getEmailInput()).setValue(email);
    await (await this.getPasswordInput()).setValue(password);
  }
}

export default new LoginPage();
