class CustomerLoginElements {

  inputEmail = () => '#email';
  
  inputPassword = () => 'fieldset[class$="login"] div[class$="required"] #pass';

  buttonSingIn = () => 'button[class="action login primary"]';
}

export default CustomerLoginElements;