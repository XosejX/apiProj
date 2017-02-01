import { ApiProjPage } from './app.po';

describe('api-proj App', function() {
  let page: ApiProjPage;

  beforeEach(() => {
    page = new ApiProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
