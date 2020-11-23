describe ('Hamburger Menu', () => {

  const hamburgerButton = '[class*="TheHeader_button"]'
  const close ='[class*="TheMenu_closeIcon"]'

  describe('loads correctly', () => {

    it('hamburger button opens menu when clicked', () => {
      cy.visit('/')
      cy.get(hamburgerButton).click()
      cy.get('#hamburger-menu').should('be.visible')
    })

    it('close button closes menu when clicked', () => {
      cy.get(close).click()
      cy.get('#hamburger-menu').should('not.be.visible')
    })

  })

  describe('functions correctly', () => { 

    it('authors link opens authors page when click', () => {
      cy.get(hamburgerButton).click()
      cy.get('a').contains('Authors').click()
      cy.location('pathname')
      .should(($el) => {
        expect($el).to.equal('/authors')
      })
    })
  
    it('home link opens home page when clicked', () => {
      cy.get(hamburgerButton).click()
      cy.get('a').contains('Home').click()
      cy.location('pathname')
      .should(($el) => {
        expect($el).to.equal('/')
      })
    })
    
  })

})
