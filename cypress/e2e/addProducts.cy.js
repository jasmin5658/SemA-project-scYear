describe('Remove', () => {
    it('allow you to remove a product from the cart', () => {
      cy.visit('http://10.100.102.14:5173/')
      cy.contains('').click();
      cy.contains('Add To Cart').click();
      cy.contains('Remove').click();
    })
  })