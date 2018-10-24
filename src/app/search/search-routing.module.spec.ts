import { SearchRoutingModule } from './search-routing.module';

describe('SearchRoutingModule', () => {
  let searchRoutingModule: SearchRoutingModule;

  beforeEach(() => {
    searchRoutingModule = new SearchRoutingModule();
  });

  it('should create an instance', () => {
    expect(searchRoutingModule).toBeTruthy();
  });
});
