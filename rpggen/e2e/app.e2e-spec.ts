import { RpggenPage } from './app.po';

describe('rpggen App', () => {
  let page: RpggenPage;

  beforeEach(() => {
    page = new RpggenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
