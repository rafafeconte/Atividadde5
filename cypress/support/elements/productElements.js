class ProductElements {
  
  size = () => 'div[aria-label="S"]';

  orangeColor = () => 'div[aria-label="Orange"]';

  buttonAddToCart = () => 'div[class="product-add-form"] button[type="submit"]';

  actionShowCart = () => 'div [class="minicart-wrapper"] a[class="action showcart"]';

  buttonProceedToCheckout = () => '#top-cart-btn-checkou';
}
export default ProductElements;