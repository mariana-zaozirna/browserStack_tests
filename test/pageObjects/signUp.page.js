import Page from './page.js';
import { faker } from '@faker-js/faker';

const signUpBtn = '~button-sign-up-container';
const emailInput = '~input-email';
const passwordInput = '~input-password';
const confirmPasswordInput = '~input-repeat-password';
const submitSignUpBtn = '~button-SIGN UP';
const alertTitle = 'id=android:id/alertTitle';
const alertMessage = 'id=android:id/message';
const submitButton = 'id=android:id/button1';

class SignUpPage extends Page {
    
  async clickSignUpbtn() {
    return await super.clickElement(signUpBtn);
  }

  async getEmailInput() {
    return await super.getElement(emailInput);
  }

  async getSubmitButton() {
    return await super.getElement(submitButton);
  }

  async clickSubmitButton() {
    return await super.clickElement(submitButton);
  }

  async getAlertMessage() {
    return await super.getElement(alertMessage);
  }

  async getAlertTitle() {
    return await super.getElement(alertTitle);
  }

  async getPasswordInput() {
    return await super.getElement(passwordInput);
  }

  async getConfirmPasswordInput() {
    return await super.getElement(confirmPasswordInput);
  }

  async getSubmitSignUpBtn() {
    return await super.getElement(submitSignUpBtn);
  }

  async clickSubmitSignUpBtn() {
    return await super.clickElement(submitSignUpBtn);
  }

  async fillSignUpForm() {
    let generatedPassword = faker.internet.password();
    const data = {
      email: faker.internet.email(),
      password: generatedPassword,
      confirmPswd: generatedPassword
    };
    await (await this.getEmailInput()).setValue(data.email);
    await (await this.getPasswordInput()).setValue(data.password);
    await (await this.getConfirmPasswordInput()).setValue(data.confirmPswd);

    return data;
  }
}

export default new SignUpPage();
