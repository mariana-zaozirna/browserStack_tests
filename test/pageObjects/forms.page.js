import Page from './page.js';
import { faker } from '@faker-js/faker';

const formsTexts = '//android.view.ViewGroup/android.widget.TextView';
const textInput = `~text-input`;
const inputTextResult = '~input-text-result';
const switchButton = `~switch`;
const switchText = '~switch-text';
const dropdown = `~Dropdown`;
const listView = 'id=com.wdiodemoapp:id/select_dialog_listview';
const secondOption =
  '//android.widget.ListView/android.widget.CheckedTextView[3]';
const dropdownValue =
  '//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText';
const activeButton = `~button-Active`;
const inactiveButton =
  '//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup';
const modalText = 'id=android:id/message';
const cancelButton = 'id=android:id/button2';
const okButton = 'id=android:id/button1';

class FormsPage extends Page {

  async getInputTextResult() {
    return await super.getElement(inputTextResult);
  }

  async getModalText() {
    return await super.getElement(modalText);
  }

  async getCancelButton() {
    return await super.getElement(cancelButton);
  }

  async getOKButton() {
    return await super.getElement(okButton);
  }

  async clickOkButton() {
    return await super.clickElement(okButton);
  }

  async clickActiveButton() {
    return await super.clickElement(activeButton);
  }

  async getActiveButton() {
    return await super.getElement(activeButton);
  }

  async getInactiveButton() {
    return await super.getElement(inactiveButton);
  }

  async getDropdown() {
    return await super.getElement(dropdown);
  }

  async getDropdownValue() {
    return await super.getElement(dropdownValue);
  }

  async getlistOptions() {
    return await super.getElement(listView);
  }

  async selectOption() {
    return await super.clickElement(secondOption);
  }

  async getListView() {
    return await super.getElement(listView);
  }

  async clickDropdown() {
    return await super.clickElement(dropdown);
  }

  async getSwitchText() {
    return await super.getElement(switchText);
  }

  async getSwitchButton() {
    return await super.getElement(switchButton);
  }

  async clickSwitchButton() {
    return await super.clickElement(switchButton);
  }

  async getFormsTexts() {
    const formsTextElements = await $$(formsTexts);
    const allTexts = await Promise.all(
      formsTextElements.map((element) => element.getText())
    );
    return allTexts;
  }

  async fillTextInput() {
    const inputValue = faker.person.jobArea();
    await super.fillInput(textInput, inputValue);
    return inputValue;
  }
}

export default new FormsPage();
