import ProductElements from "../elements/productElements";

const productElements = new ProductElements();

class ProductPage {
  
  size(){
    cy.get(productElements.size()).should('be.visible').click();
  }

  color(){
    cy.get(productElements.orangeColor()).should('be.visible').click();
  }
  
  addToCart(){
    cy.get(productElements.buttonAddToCart()).should('be.visible').click();
  }

}

export default ProductPage;