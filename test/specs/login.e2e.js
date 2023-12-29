import loginPage from '../pageObjects/login.page.js';
import tabsPage from '../pageObjects/tabs.page.js';

describe('Login functionality', () => {

  it('TC_4: Login with empty fields', async () => {
    await tabsPage.clickLoginTab();
    await loginPage.clickSubmitButton();
    const allTexts = await loginPage.getErrorMessage();
    await expect(
      allTexts.includes('Please enter a valid email address')
    ).toEqual(true);
    await expect(
      allTexts.includes('Please enter at least 8 characters')
    ).toEqual(true);
  });
  
});
