import Page from './page.js';

const swipeTab = `~Swipe`;
const homeTab = `~Home`;
const loginTab = `~Login`;
const formsTab = `~Forms`;

class TabsPage extends Page {
    
  async getSwipeTab() {
    return await super.getElement(swipeTab);
  }

  async clickFormsTab() {
    return await super.clickElement(formsTab);
  }

  async clickSwipeTab() {
    return await super.clickElement(swipeTab);
  }

  async getHomeTab() {
    return await super.getElement(homeTab);
  }

  async clickHomeTab() {
    return await super.clickElement(homeTab);
  }

  async clickLoginTab() {
    return await super.clickElement(loginTab);
  }
}

export default new TabsPage();
