export class Angular2Rc2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-rc2-app h1')).getText();
  }
}
