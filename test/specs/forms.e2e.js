import tabsPage from '../pageObjects/tabs.page.js';
import formsPage from '../pageObjects/forms.page.js';

describe('Interaction with forms', () => {

  beforeEach(async () => {
    await tabsPage.clickFormsTab();
  });

  it('TC_5: Typing into "Input" field', async () => {
    const allTexts = await formsPage.getFormsTexts();
    await expect(allTexts.includes('Form components')).toEqual(true);
    await expect(allTexts.includes('Input field:')).toEqual(true);
    const inputValue = await formsPage.fillTextInput();
    const result = await (await formsPage.getInputTextResult()).getText();
    await expect(inputValue).toEqual(result);
  });

  it('TC_6: Turning the switch ON_OFF', async () => {
    await formsPage.clickSwitchButton();
    await expect(await formsPage.getSwitchButton()).toHaveText('ON');
    await expect(await formsPage.getSwitchText()).toHaveText(
      `Click to turn the switch OFF`
    );
    await formsPage.clickSwitchButton();
    await expect(await formsPage.getSwitchButton()).toHaveText('OFF');
    await expect(await formsPage.getSwitchText()).toHaveText(
      `Click to turn the switch ON`
    );
  });

  it('TC_6: Dropdown functionality', async () => {
    await formsPage.clickDropdown();
    await expect(await formsPage.getListView()).toBeDisplayed();
    await formsPage.selectOption();
    const selectedDropdownText = await (
      await formsPage.getDropdownValue()
    ).getText();
    await expect(selectedDropdownText).toEqual(`Appium is awesome`);
  });

  it('TC_7: Interaction with active/inactive buttons', async () => {
    await expect(await formsPage.getInactiveButton()).toHaveAttribute(
      'clickable',
      'false'
    );
    await formsPage.clickActiveButton();
    await expect(await formsPage.getModalText()).toHaveText(
      'This button is active'
    );
    await expect(await formsPage.getCancelButton()).toBeDisplayed();
    await expect(await formsPage.getOKButton()).toBeDisplayed();
    await formsPage.clickOkButton();
  });

  afterEach(async () => {
    await tabsPage.clickHomeTab();
  });
  
});
