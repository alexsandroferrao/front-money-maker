describe("Navegando no money maker", () => {
  it("Abrindo a página e clicando no link ", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a').click();
    cy.get('#formBasicEmail').type("alexsandro");
    cy.get('#formBasicPassword').type('senha');
    cy.get('#formBasicCheckbox').click();
    cy.get('.btn').click();
    cy.get('a').should("have.text", "Money");
  });
});
