import tabsPage from '../pageObjects/tabs.page.js';
import swipePage from '../pageObjects/swipe.page.js';

describe('Swiping fucntionality', () => {

  beforeEach(async () => {
    await tabsPage.clickSwipeTab();
  });

  it('TC_1:Swiping down to the wdio robot', async () => {
    await expect(await swipePage.getScreenDescription()).toHaveText(
      "Or swipe vertical to find what I'm hiding."
    );
    await swipePage.swipeVertically(0.9, 0.1, 100);
    await expect(await swipePage.getRobotLogo()).toBeDisplayed();
    await expect(await swipePage.getScreenDescription()).toHaveText(
      'You found me!!!'
    );

    await swipePage.swipeVertically(0.15, 0.9, 100);
  });

  it('TC_2:Swiping right', async () => {
    await expect(await swipePage.getScreenTitle()).toHaveText(
      'Swipe horizontal'
    );

    await expect(await swipePage.getCardTitle()).toHaveText(
      'FULLY OPEN SOURCE'
    );
    await expect(await swipePage.getCardDescription()).toHaveText(
      'WebdriverIO is fully open source and can be found on GitHub'
    );
    await expect(await swipePage.getDot(0)).toHaveAttribute(
      'clickable',
      'false'
    );

    await swipePage.swipeHorizontally(0.9, 0.1, 700);
    await expect(await swipePage.getCardTitle()).toHaveText('GREAT COMMUNITY');
    await expect(await swipePage.getCardDescription()).toHaveText(
      'WebdriverIO has a great community that supports all members.'
    );
    await expect(await swipePage.getDot(1)).toHaveAttribute(
      'clickable',
      'false'
    );

    await swipePage.swipeHorizontally(0.9, 0.1, 700);
    await expect(await swipePage.getCardTitle()).toHaveText('JS.FOUNDATION');
    await expect(await swipePage.getCardDescription()).toHaveText(
      'The JS Foundation is host to projects that span the entire JavaScript ecosystem.'
    );
    await expect(await swipePage.getDot(2)).toHaveAttribute(
      'clickable',
      'false'
    );

    await swipePage.swipeHorizontally(0.9, 0.1, 700);
    await expect(await swipePage.getCardTitle()).toHaveText('SUPPORT VIDEOS');
    await expect(await swipePage.getCardDescription()).toHaveText(
      'The community around WebdriverIO is actively speaking on various user groups or conferences about specific topics around automated testing with WebdriverIO.'
    );
    await expect(await swipePage.getDot(3)).toHaveAttribute(
      'clickable',
      'false'
    );

    await swipePage.swipeHorizontally(0.9, 0.1, 700);
    await expect(await swipePage.getCardTitle()).toHaveText('EXTENDABLE');
    await expect(await swipePage.getCardDescription()).toHaveText(
      'Adding helper functions, or more complicated sets and combinations of existing commands is simple and really useful'
    );
    await expect(await swipePage.getDot(4)).toHaveAttribute(
      'clickable',
      'false'
    );

    await swipePage.swipeHorizontally(0.9, 0.1, 700);
    await expect(await swipePage.getCardTitle()).toHaveText('COMPATIBLE');
    await expect(await swipePage.getCardDescription()).toHaveText(
      'WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world'
    );
    await expect(await swipePage.getDot(5)).toHaveAttribute(
      'clickable',
      'false'
    );
  });

  afterEach(async () => {
    await tabsPage.clickHomeTab();
  });
  
});
