import CustomerLoginElements from "../elements/customerLoginElements";
const loginElements = new CustomerLoginElements();

class LoginPage {

  login(email, password){
      cy.get(loginElements.inputEmail()).should('be.visible').type(email)
      cy.get(loginElements.inputPassword()).should('be.visible').type(password)
  }
  buttonSubmit(){
    cy.get(loginElements.buttonSingIn()).should('be.visible').click();
  }
}

export default LoginPage;