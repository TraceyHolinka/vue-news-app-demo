describe ('Article Page', () => {

  const articleBody = '[data-test="article-body"]'
  const authorLink ='[data-test="article-author"] a'

  describe('loads correctly', () => {

    it('the heading', () => {
      cy.visit('/0')
      cy.get('h1').should('be.visible')
    })

    it('the article body', () => {
      cy.get(articleBody).should('be.visible')
    })

  })

  describe('functions correctly', () => { 

    it('loads an author pge', () => {
      cy.get(authorLink).first().invoke('text')
      .then((text1) => {
        cy.get(authorLink).click()

        cy.get('h1').invoke('text')
        .should((text2) => {
          expect(text1).to.eq(text2)
        })

      })
    })
    
  })

})