describe ('Authors Page', () => {

  const authorBio = '[class*="AuthorBio_authorBio"]'
  const authorLink = '[class*="AuthorBio_heading"]'

  describe ('loads correctly', () => {

    it('bios', () => {
      cy.visit('/authors')
      cy.get(authorBio)
      .should(($el) => {
        expect($el.length).to.be.at.least(1)
      })
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
