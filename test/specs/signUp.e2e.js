import tabsPage from '../pageObjects/tabs.page.js';
import signUpPage from '../pageObjects/signUp.page.js';
import loginPage from '../pageObjects/login.page.js';

describe('Sign Up fucntionality', () => {

  it('TC_3:Valid Sign up', async () => {
    await tabsPage.clickLoginTab();
    await signUpPage.clickSignUpbtn();
    await expect(await signUpPage.getEmailInput()).toBeDisplayed();
    await expect(await signUpPage.getPasswordInput()).toBeDisplayed();
    await expect(await signUpPage.getConfirmPasswordInput()).toBeDisplayed();
    await expect(await signUpPage.getSubmitSignUpBtn()).toBeDisplayed();
    const fakeData = await signUpPage.fillSignUpForm();
    const savedEmail = fakeData.email;
    const savedPassword = fakeData.password;
    await expect(await signUpPage.getPasswordInput()).toHaveAttribute(
      'password',
      'true'
    );
    await expect(await signUpPage.getConfirmPasswordInput()).toHaveAttribute(
      'password',
      'true'
    );
    await signUpPage.clickSubmitSignUpBtn();
    await expect(await signUpPage.getAlertTitle()).toHaveText('Signed Up!');
    await expect(await signUpPage.getAlertMessage()).toHaveText(
      'You successfully signed up!'
    );
    await expect(await signUpPage.getSubmitButton()).toBeDisplayed();
    await signUpPage.clickSubmitButton();

    await loginPage.clickLoginButton();
    await expect(await loginPage.getEmailInput()).toBeDisplayed();
    await expect(await loginPage.getPasswordInput()).toBeDisplayed();
    await loginPage.login(savedEmail, savedPassword);
    await expect(await loginPage.getPasswordInput()).toHaveAttribute(
      'password',
      'true'
    );
    await loginPage.clickSubmitButton();
    await expect(await loginPage.getAlertTitle()).toHaveText('Success');
    await expect(await loginPage.getAlertMessage()).toHaveText(
      'You are logged in!'
    );
    await loginPage.clickOkButtonInModalWindow();
  });
  
});
