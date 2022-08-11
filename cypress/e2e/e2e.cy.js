import cadastroFactory from '../factories/E2eFactories'
var formulario = cadastroFactory.form() 

describe('fluxo e2e', ()=> {
    it('realizando compra com usuário cadastrado', ()=>{
      cy.visit('https://magento.nublue.co.uk/')
      cy.get('div[class="panel header"] a[href$="y51ay8%2C/"]').click()
      cy.get('#email').type('nilay_conte28@wj.com')
      cy.get('fieldset[class$="login"] div[class$="required"] #pass').type('134679rA')
      cy.get('button[class="action login primary"]').click()
      cy.wait(5000)
      //const loggedIn = 'Welcome, Nilay Conte!' 
     // cy.contains('div[class="panel wrapper"] li[class="greet welcome"]', loggedIn).should('be.visible')
      cy.get('#search').type('jackets{enter}')
      cy.get('img[alt="Adrienne Trek Jacket"]').click()
      cy.wait(7000)
      cy.get('div[aria-label="S"]').click()
      cy.get('div[aria-label="Orange"]').click()
      cy.get('div[class="product-add-form"] button[type="submit"]').click()
      cy.wait(5000)
      cy.get('div [class="minicart-wrapper"] a[class="action showcart"]').click()
      cy.get('#top-cart-btn-checkout').click()
      cy.wait(30000)
      cy.get('input[name="company"]').type(formulario.companyName)
      cy.get('input[name$="[0]"]').type(formulario.streetName)
      cy.get('input[name$="[1]"]').type(formulario.numberBuilding)
      cy.get('input[name$="[2]"]').type(formulario.stateAdress)
      cy.get('select[name="country_id"]').select('Brazil')
      cy.get('div[name$= "region_id"] select[name="region_id"]').select(25)
      cy.get('input[name="city"]').type('São Paulo')
      cy.get('input[name="postcode"]').type('05001-000')
      cy.get('input[name="telephone"]').type(formulario.phoneNumber)
      cy.wait(5000)
      cy.get('button[data-role="opc-continue"]').click()
      cy.wait(5000)
      cy.get('button[class="action primary checkout"]').click()
      cy.wait(2500)
      const congratulations = 'Thank you for your purchase!'
      cy.contains('span[class="base"]', congratulations).should('be.visible')
    })
})