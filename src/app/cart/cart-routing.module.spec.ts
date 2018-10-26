import { CartRoutingModule } from './cart-routing.module';

describe('CartRoutingModule', () => {
  let cartRoutingModule: CartRoutingModule;

  beforeEach(() => {
    cartRoutingModule = new CartRoutingModule();
  });

  it('should create an instance', () => {
    expect(cartRoutingModule).toBeTruthy();
  });
});
