describe ('Authors Page', () => {

  const authorBio = '[data-test="author-bio"]'
  const authorLink = '[data-test="author-heading"]'

  describe ('loads correctly', () => {

    it('bios', () => {
      cy.visit('/authors')
      cy.get(authorBio).should('exist')
    })

  })

  describe('functions correctly', () => { 
    it('loads an author pge', () => {
      cy.get(authorLink).first().invoke('text')
      .then((text1) => {
        cy.get(authorLink).first().click()

        cy.get('h1').invoke('text')
        .should((text2) => {
          expect(text1).to.eq(text2)
        })

      })
    })
  })

})
