import { Angular2Rc2Page } from './app.po';

describe('angular2-rc2 App', function() {
  let page: Angular2Rc2Page;

  beforeEach(() => {
    page = new Angular2Rc2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-rc2 works!');
  });
});
