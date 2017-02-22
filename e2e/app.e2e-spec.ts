import { Ng2Chapter1CodePage } from './app.po';

describe('ng2-chapter1-code App', function() {
  let page: Ng2Chapter1CodePage;

  beforeEach(() => {
    page = new Ng2Chapter1CodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
