
import CustomerAccountElements from '../elements/customerAccountElements';

const customerAccountElements = new CustomerAccountElements();

class SignInPage {

  fillFrom() {
     cy.get(customerAccountElements.inputFirstName()).should('be.visible').clear().type('Nilay')
     cy.get(customerAccountElements.inputLastName()).should('be.visible').clear().type('Conte')
     cy.get(customerAccountElements.newsletter()).click()
     cy.get(customerAccountElements.allowRemoteShoppingAssistance()).click()
     cy.get(customerAccountElements.inputEmail()).should('be.visible').clear().type('nilay_conte12@wj.com')
     cy.get(customerAccountElements.inputPassword()).should('be.visible').clear().type('134679rA')
     cy.get(customerAccountElements.inputConfirmPassword()).should('be.visible').clear().type('134679rA')
  }
  
  submitAccountForm() {
    cy.get(customerAccountElements.buttonCreateAnAccount()).should('be.visible').click()
  }
}

export default SignInPage;


