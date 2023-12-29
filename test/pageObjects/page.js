export default class Page {
    
  async getElement(selector) {
    return await $(selector);
  }

  async getElements(selector) {
    return await $$(selector);
  }

  async getElementText(selector) {
    return await (await this.getElement(selector)).getText();
  }

  async fillInput(selector, value) {
    await (await this.getElement(selector)).setValue(value);
  }

  async clickElement(selector) {
    await (await this.getElement(selector)).click();
  }

  async swipeVertically(from, to, duration) {
    console.log(`Converted is form ${from} to ${to}`);
    const { width, height } = await browser.getWindowSize();
    const middleOfScreen = width * 0.5;
    const heightOfScreenDownPoint = height * from;

    const heightOfScreenUpPoint = height * to;
    console.log(
      'Performing swipe:',
      heightOfScreenDownPoint,
      'to',
      heightOfScreenUpPoint,
      'with duration',
      duration
    );

    await browser.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          {
            type: 'pointerMove',
            duration: 0,
            x: middleOfScreen,
            y: heightOfScreenDownPoint
          },
          { type: 'pointerDown', button: 0 },
          {
            type: 'pointerMove',
            duration: duration,
            x: middleOfScreen,
            y: heightOfScreenUpPoint
          },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
  }

  async swipeHorizontally(from, to, duration) {
    const { width, height } = await browser.getWindowSize();
    const middleOfScreen = height * 0.5;
    const startPosition = width * from;
    const endPosition = width * to;

    await browser.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          {
            type: 'pointerMove',
            duration: 0,
            x: startPosition,
            y: middleOfScreen
          },
          { type: 'pointerDown', button: 0 },
          {
            type: 'pointerMove',
            duration: duration,
            x: endPosition,
            y: middleOfScreen
          },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
  }
}
