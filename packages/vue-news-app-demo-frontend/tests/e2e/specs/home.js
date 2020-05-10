describe('Home Page', () => {

  const heading = '[class*="Home_heading"]'
  const summary = '[class*="ArticleCard_summary"]'
  const toggleSwitch = '[class*="ToggleSwitch_label"]'

  describe('loads correctly', () => {
    
    it('heading', () => {
      cy.visit('/')
      cy.contains(heading, 'Recent Faker Articles')
    })

    it('images',() => {
      cy.get('img')
      .should(($el) => {
        expect($el.length).to.be.at.least(1)
      })
    })

    it('articles',() => {
      cy.get(summary)
      .should(($el) => {
        expect($el.length).to.be.at.least(1)
      })
    })

  })

  describe('functions correctly', () => {

    it('togle hides images on click', () => {
      cy.get(toggleSwitch).click()
      cy.get('img')
      .should(($el) => {
        expect($el).to.have.length = 0
      })
    })
  
    it('on toggle click images return', () => {
      cy.get(toggleSwitch).click()
      cy.get('img')
      .should(($el) => {
        expect($el).to.have.length > 0
      })
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
