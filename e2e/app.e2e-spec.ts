import { PouchiePage } from './app.po';

describe('pouchie App', () => {
  let page: PouchiePage;

  beforeEach(() => {
    page = new PouchiePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
