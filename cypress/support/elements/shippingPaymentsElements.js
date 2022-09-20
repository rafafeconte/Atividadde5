class ShippingPaymentsElements {

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

  buttonPlaceOrder = () => 'button[class="action primary checkout"]';

}

export default ShippingPaymentsElements;