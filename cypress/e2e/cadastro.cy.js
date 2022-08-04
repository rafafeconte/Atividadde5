describe('cadastro de usuario', ()=>{
    it('cadastro de usuario com sucesso', ()=>{
    
        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type('Nilay')
        cy.get('#lastname').type('Conte')
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type('nilay_conte24@wj.com')
        cy.get('input[id="password"]').type('134679rA')
        cy.get('input[id="password-confirmation"]').type('134679rA')
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'Thank you for registering with Main Website Store.'
        cy.contains('div[role="alert"]', mensagem).should('be.visible')
    
    })
})