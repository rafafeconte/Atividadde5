
import MyAccountElements from '../elements/myAccountElements';

const myAccountElements = new MyAccountElements();

class MyAccountPage {

  messageSucess(mensagem) {
  cy.get(myAccountElements.message()).should('contain', `${mensagem}`);
  }
}

export default MyAccountPage;