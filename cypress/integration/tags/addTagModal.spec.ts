/// <reference types="cypress" />

describe('addTagModal.spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    // Click on the add tag button to open the modal
    cy.get('[data-testid="AddTagButton"]').click();
  });

  it('should open when the add tag button is clicked', () => {
    const modal = cy.get('[data-testid="AddTagModal"]');

    modal.should('be.visible');
  });

  it('should stay open when the add tag button is clicked without a name being entered', () => {
    const modal = cy.get('[data-testid="AddTagModal"]');

    // Click on the add button
    modal.get('[data-testid="AddTagModalAddButton"]').click();

    modal.should('be.visible');
  });

  it('should close when the add tag button is clicked with a name being entered', () => {
    const modal = cy.get('[data-testid="AddTagModal"]');

    // Get the input and type in a name
    const input = modal.get('[data-testid="AddTagModalNameInput"]');
    input.type('test');

    // Click on the add button
    cy.get('[data-testid="AddTagModalAddButton"]').click();

    modal.should('not.be.visible');
  });

  it('a new tag should have been created with the name "test"', () => {
    // Gets the last tag nav item
    const tagNavItem = cy.get('[data-testid="TagNavItem"]').last();

    tagNavItem.should('have.text', 'test');
  });
});

export const _ = {};
