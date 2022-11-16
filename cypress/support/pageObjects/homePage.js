
import HomeElements from '../elements/homeElements';
import CustomerAccountElements from '../elements/customerAccountElements';
import SearchElements from '../elements/searchElements';

const homeElements = new HomeElements();
const customerPage = new CustomerAccountElements();
const searchElements = new SearchElements();

class HomePage {

  go() {
     cy.visit('/');
  }
  
  CreateAnAccount() {
    cy.get(homeElements.createAnAccount())
      .should('be.visible').click();
    cy.intercept(
      { method: 'GET', url: '**/collection.html' },
    ).as('getLastRequest');
    cy.wait('@getLastRequest');
    cy.url().should('include', customerPage.url());
  }
  
  searchProduct() {
     cy.get(searchElements.inputSearch()).should('be.visible').type('jackets{enter}')
}

  clickSignIn(){
    cy.get(homeElements.signIn()).should('be.visible').click();
  }

  showCart(){
    cy.get(homeElements.actionShowCart()).should('be.visible').click();
  }

  ProceedToCheckout(){
    cy.get(homeElements.buttonProceedToCheckout()).should('be.visible').click();
  }
}
export default HomePage;