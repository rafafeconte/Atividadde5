import SearchElements from "../elements/searchElements";

const searchElements = new SearchElements();

class SearchPage {

  clickProduct(){
     cy.get(searchElements.jackets()).should('be.visible').click();
  }
}
export default SearchPage;