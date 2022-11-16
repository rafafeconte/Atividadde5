class CustomerAccountElements {

  url = () => '/customer/account/create/';

  inputFirstName = () => '#firstname';

  inputLastName = () => '#lastname';

  newsletter = () => 'input[id="is_subscribed"]';

  allowRemoteShoppingAssistance = () => '#assistance_allowed_checkbox';

  inputEmail = () => 'div[class="field required"] input[type="email"]';

  inputPassword = () => 'input[id="password"]';

  inputConfirmPassword = () => 'input[id="password-confirmation"]';

  buttonCreateAnAccount = () => 'button[class="action submit primary"]';

}

export default CustomerAccountElements; 