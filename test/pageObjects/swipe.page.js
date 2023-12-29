import Page from './page.js';

const screenTitle =
  '//*[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView';
const screenDescription =
  '//*[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.widget.TextView';
const robot = '~WebdriverIO logo';
const cardTitle =
  '(//*[@content-desc="card"]/android.view.ViewGroup/android.widget.TextView)[1]';
const cardDescription =
  '(//*[@content-desc="card"]/android.view.ViewGroup/android.widget.TextView)[2]';
const dotPlaceHolder =
  '//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup/android.view.ViewGroup[$]/android.view.ViewGroup';

class SwipePage extends Page {

  async getScreenTitle() {
    return await super.getElement(screenTitle);
  }

  async getScreenDescription() {
    return await super.getElement(screenDescription);
  }
  
  async getCardTitle() {
    return await super.getElement(cardTitle);
  }

  async getCardDescription() {
    return await super.getElement(cardDescription);
  }

  async getRobotLogo() {
    return await super.getElement(robot);
  }

  async getDot(index) {
    return await super.getElement(dotPlaceHolder.replace('$', index + 1));
  }
}

export default new SwipePage();
