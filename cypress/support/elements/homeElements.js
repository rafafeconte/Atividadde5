class HomeElements {

  signIn = () => 'div[class="panel header"] li[class="link authorization-link"]';

  createAnAccount = () => 'div[class="panel header"] a[href$="/customer/account/create/"]';

  search = () => '#search';

  actionShowCart = () => 'div [class="minicart-wrapper"] a[class="action showcart"]';

  buttonProceedToCheckout = () => '#top-cart-btn-checkout';
}

export default HomeElements;