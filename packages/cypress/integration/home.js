describe('Home Page', () => {

  const heading = '[data-test="home-heading"]'
  const summary = '[data-test="card-summary"]'
  const toggleSwitch = '[data-test="toggle-label"]'

  describe('loads correctly', () => {
    
    it('heading', () => {
      cy.visit('/')
      cy.contains(heading, 'Recent Faker Articles')
    })

    it('images',() => {
      cy.get('img').should('exist')
    })

    it('articles',() => {
      cy.get(summary).should('exist')
    })

  })

  describe('functions correctly', () => {

    it('togle hides images on click', () => {
      cy.get(toggleSwitch).click()
      cy.get('img').should('not.exist')
    })
  
    it('on toggle click images return', () => {
      cy.get(toggleSwitch).click()
      cy.get('img').should('exist')
    })

    it('loads an article page', () => {
      cy.visit('/')
      cy.get('h2').first().invoke('text')
      .then((text1) => {
        cy.get('h2').first().click()

        cy.get('h1').invoke('text')
        .should((text2) => {
          expect(text1).to.eq(text2)
        })

      })
    })

  })

})
