class CheckoutElements {

  inputCompany = () => 'input[name="company"]';

  inputStrretAddressOne = () => 'input[name$="[0]"]';

  inputStrretAddressTwo = () => 'input[name$="[1]"]';

  inputStrretAddressThree = () => 'input[name$="[2]"]';

  inputCountry = () => 'select[name="country_id"]';

  inputState = () => 'div[name$= "region_id"] select[name="region_id"]';

  inputCity = () => 'input[name="city"]';

  inputZipePostalCode = () => 'input[name="postcode"]';

  inputPhone = () => 'input[name="telephone"]';

  buttonNext = () => 'button[data-role="opc-continue"]';

  shippingMethods = () => '#checkout-step-shipping_method input[class="radio"]';
  
  paymentMethod = () => 'div[class="checkout-billing-address"] input[type="checkbox"]';

  buttonPlaceOrder = () => 'button[class="action primary checkout"]';

  thankMessage = () => 'span[class="base"]';
}

export default CheckoutElements;