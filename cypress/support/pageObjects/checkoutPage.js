import CheckoutElements from "../elements/checkoutElements";

const checkoutElements = new CheckoutElements();

class CheckoutPage {

  CheckoutFrom(){

    cy.get(checkoutElements.inputCompany()).should('be.visible').type('Web Jump');
    cy.get(checkoutElements.inputStrretAddressOne()).should('be.visible').type('Travessa Gabriel Revel');
    cy.get(checkoutElements.inputStrretAddressTwo()).should('be.visible').type('36');
    cy.get(checkoutElements.inputCountry()).should('be.visible').select('Brazil')
    cy.get(checkoutElements.inputState()).should('be.visible').select(25);
    cy.get(checkoutElements.inputCity()).should('be.visible').type('São Paulo');
    cy.get(checkoutElements.inputZipePostalCode()).should('be.visible').type('05001-000');
    cy.get(checkoutElements.inputPhone()).should('be.visible').type('11955350697');
    
  }

  shippingMethods(){
    cy.get(checkoutElements.shippingMethods()).should('be.visible').click();
  }

  buttonSubmit(){
    cy.get(checkoutElements.buttonNext()).should('be.visible').click();
  }

  paymentMethod(){
    cy.get(checkoutElements.paymentMethod()).should('be.visible').click();
  }

  placeOrder(){
    cy.get(checkoutElements.buttonPlaceOrder()).should('be.visible').click();
  }

  messageThanks(){
    cy.get(checkoutElements.thankMessage()).should('have.text', 'Thank you for your purchase!');
  }

}
export default CheckoutPage;